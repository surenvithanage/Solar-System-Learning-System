package com.web.astronomy.server.mapping;

import javax.persistence.*;


@Entity
@Table(name = "quiz")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @Lob
    private byte[] quizFile;

    public Quiz() {
    }

    public Quiz(Long id, String title, String description, byte[] quizFile) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.quizFile = quizFile;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public byte[] getQuizFile() {
        return quizFile;
    }

    public void setQuizFile(byte[] quizFile) {
        this.quizFile = quizFile;
    }
}
