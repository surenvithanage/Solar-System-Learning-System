package com.web.astronomy.server.repository;

import com.web.astronomy.server.mapping.Contactus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactusRepository extends JpaRepository<Contactus, Long> {
}
