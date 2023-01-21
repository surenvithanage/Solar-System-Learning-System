package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.FaqDto;
import com.web.astronomy.server.dto.QuizDto;
import com.web.astronomy.server.mapping.Faq;
import com.web.astronomy.server.mapping.Progress;
import com.web.astronomy.server.mapping.Quiz;
import com.web.astronomy.server.repository.FaqRepository;
import com.web.astronomy.server.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public Quiz insert(QuizDto quizDto) {
        Quiz faq = new Quiz();
        faq.setDescription(quizDto.getDescription());
        faq.setQuizFile(quizDto.getQuizFile());
        faq.setTitle(quizDto.getTitle());
        return quizRepository.save(faq);
    }

    public List<Quiz> list() {
        return quizRepository.findAll();
    }

    public Quiz update(QuizDto quizDto) {
        Optional<Quiz> quizOptional = quizRepository.findById(Long.valueOf(quizDto.getId()));
        if (quizOptional.isPresent()) {
            Quiz quiz = quizOptional.get();
            quiz.setTitle(quizDto.getTitle());
            quiz.setQuizFile(quizDto.getQuizFile());
            quiz.setDescription(quizDto.getDescription());
            return quizRepository.save(quiz);
        }
        return null;
    }

    public boolean delete(QuizDto quizDto) {
        Optional<Quiz> quizOptional = quizRepository.findById(Long.valueOf(quizDto.getId()));
        if (quizOptional.isPresent()) {
            quizRepository.deleteById(Long.valueOf(quizDto.getId()));
            return true;
        }
        return false;
    }
}
