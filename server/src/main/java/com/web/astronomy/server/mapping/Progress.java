package com.web.astronomy.server.mapping;

import javax.persistence.*;

@Entity
@Table(name = "progress")
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long userId;
    private long quizId;
    private String marks;
    private int progress;

    public Progress() {
    }

    public Progress(Long id, long userId, long quizId, String marks, int progress) {
        this.id = id;
        this.userId = userId;
        this.quizId = quizId;
        this.marks = marks;
        this.progress = progress;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getQuizId() {
        return quizId;
    }

    public void setQuizId(long quizId) {
        this.quizId = quizId;
    }

    public String getMarks() {
        return marks;
    }

    public void setMarks(String marks) {
        this.marks = marks;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }
}
