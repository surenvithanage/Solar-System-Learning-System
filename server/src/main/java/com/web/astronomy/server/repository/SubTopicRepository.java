package com.web.astronomy.server.repository;

import com.web.astronomy.server.mapping.Subtopic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubTopicRepository extends JpaRepository<Subtopic, Long> {
}
