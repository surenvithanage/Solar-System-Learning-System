package com.web.astronomy.server.dto;

public class ProgressDto {
    private String id;
    private String userId;
    private String quizId;
    private String marks;
    private String progress;
    private String quiz;

    public ProgressDto(String id, String userId, String quizId, String marks, String progress, String quiz) {
        this.id = id;
        this.userId = userId;
        this.quizId = quizId;
        this.marks = marks;
        this.progress = progress;
        this.quiz = quiz;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuizId() {
        return quizId;
    }

    public void setQuizId(String quizId) {
        this.quizId = quizId;
    }

    public String getMarks() {
        return marks;
    }

    public void setMarks(String marks) {
        this.marks = marks;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }

    public String getQuiz() {
        return quiz;
    }

    public void setQuiz(String quiz) {
        this.quiz = quiz;
    }
}
