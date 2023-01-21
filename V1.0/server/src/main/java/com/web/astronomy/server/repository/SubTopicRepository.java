package com.web.astronomy.server.repository;

import com.web.astronomy.server.mapping.Subtopic;
import com.web.astronomy.server.mapping.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubTopicRepository extends JpaRepository<Subtopic, Long> {

    List<Subtopic> findByTopic(Topic topic);
}
