import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { SubTopicModel } from '../../model/subtopic.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ProgressModel } from '../../model/progress.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public topicList: any = [];
  public subTopicList: any = [];
  public enrolledList: any = [];
  public selectedIndex = 0;
  public selectedSubIndex = 0;

  public quizList: any = [];

  public model = new SubTopicModel('');

  public progressModel = new ProgressModel('', '', '', '', 0, '');

  public result: any;

  constructor(
    private service: CommonService
  ) { }

  ngOnInit(): void {
    this.loadTopics();
    this.loadSubTopic(1);
    this.loadQuiz();
    this.loadEnrolledQuizList();
  }

  loadEnrolledQuizList() {
    this.progressModel.userId = JSON.parse(localStorage.getItem('user'))['id'];
    this.service.quizList(this.progressModel).subscribe(
      data => {
        this.enrolledList = data;
      }
    )
  }

  loadTopics() {
    this.service.topics().subscribe(
      data => {
        this.topicList = data;
      }
    )
  }

  loadSubTopic(id: any) {
    this.subTopicList = [];
    this.model.topicId = id;
    this.service.subtopics(this.model).subscribe(
      data => {
        this.subTopicList = data;
      }
    )
  }

  loadQuiz() {
    this.service.quiz().subscribe(
      data => {
        this.quizList = data;
      }
    )
  }

  public setRow(_index: number) {
    this.selectedIndex = _index;
  }

  public setSubRow(_index: number) {
    this.selectedSubIndex = _index;
  }

  public download(payload) {
    this.progressModel.userId = JSON.parse(localStorage.getItem('user'))['id'];
    this.progressModel.quizId = payload.id;

    this.service.progress(this.progressModel).subscribe(
      data => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Enrolled Successfully',
          showConfirmButton: false,
          timer: 1500
        });

        this.result = payload.quizFile;
        const pdfInBase64 = payload.quizFile;
        const newBlob = new Blob([atob(pdfInBase64)]);
        const linkElement = document.createElement('a');
        const url = URL.createObjectURL(newBlob);
        linkElement.setAttribute('href', url);
        linkElement.setAttribute('download', 'Quiz_' + payload.title + '.pdf');
        const clickEvent = new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': false
        });
        linkElement.dispatchEvent(clickEvent);

        this.loadEnrolledQuizList();
      }
    )
  }

  handleUpload(event, quiz) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.result = reader.result;
      this.progressModel.quiz = reader.result.toString().substring(28);
      this.progressModel.progress = 2;
      this.progressModel.id = quiz.id;
      this.progressModel.quizId = quiz.quizId;
      this.progressModel.marks = quiz.marks;
    };
  }

  upload() {
    this.service.updateProgress(this.progressModel).subscribe(
      data => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Submitted Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.loadEnrolledQuizList();
      }
    )
  }

}
