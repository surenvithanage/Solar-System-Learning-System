package com.web.astronomy.server.mapping;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "subtopics")
public class Subtopic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "topic_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Topic topic;

    public Subtopic() {
    }

    public Subtopic(Long id, String title, String description, Topic topic) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.topic = topic;
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

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }
}