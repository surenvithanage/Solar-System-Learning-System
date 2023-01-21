package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.LoginDto;
import com.web.astronomy.server.mapping.User;
import com.web.astronomy.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public User authenticate(LoginDto loginDto) {
        return userRepository.findByUsernameAndPassword(loginDto.getUsername(), loginDto.getPassword());
    }
}
