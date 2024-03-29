package com.web.astronomy.server.dto;

public class QuizDto {
    private String id;
    private String title;
    private String description;
    private String quizFile;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuizFile() {
        return quizFile;
    }

    public void setQuizFile(String quizFile) {
        this.quizFile = quizFile;
    }
}
