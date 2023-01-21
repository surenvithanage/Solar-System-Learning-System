package com.web.astronomy.server.repository;

import com.web.astronomy.server.mapping.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {

    @Query(value = "SELECT p.id, p.marks, p.progress, p.user_id, u.username, p.quiz_id, q.title, p.quiz FROM progress p inner join users u on p.user_id = u.id inner join quiz q on q.id = p.quiz_id", nativeQuery = true)
    List<Object[]> progressList();


    List<Progress> findByUserId(long userId);

}
