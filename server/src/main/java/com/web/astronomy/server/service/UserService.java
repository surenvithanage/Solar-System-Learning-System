package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.UserDto;
import com.web.astronomy.server.mapping.Role;
import com.web.astronomy.server.mapping.Topic;
import com.web.astronomy.server.mapping.User;
import com.web.astronomy.server.repository.RoleRepository;
import com.web.astronomy.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    public User insert(UserDto userDto) {
        User user = new User();
        user.setAddress(userDto.getAddress());
        user.setDob(userDto.getDob());
        user.setEmail(userDto.getEmail());
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setRoleId(userDto.getRoleId());
        return userRepository.save(user);
    }

    public List<User> list() {
        return userRepository.findAll();
    }

    public User update(UserDto userDto) {
        Optional<User> userOptional = userRepository.findById(Long.valueOf(userDto.getId()));
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setEmail(userDto.getEmail());
            user.setDob(userDto.getDob());
            user.setAddress(userDto.getAddress());
            return userRepository.save(user);
        }
        return null;
    }

    public boolean delete(UserDto userDto) {
        Optional<User> userOptional = userRepository.findById(Long.valueOf(userDto.getId()));
        if (userOptional.isPresent()) {
            userRepository.deleteById(Long.valueOf(userDto.getId()));
            return true;
        }
        return false;
    }

}
