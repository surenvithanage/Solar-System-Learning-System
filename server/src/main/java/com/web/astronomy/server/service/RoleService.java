package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.RoleDto;
import com.web.astronomy.server.mapping.Quiz;
import com.web.astronomy.server.mapping.Role;
import com.web.astronomy.server.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Transactional
@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public Role insert(RoleDto roleDto) {
        Role role = new Role();
        role.setName(roleDto.getName());
        return roleRepository.save(role);
    }

    public List<Role> list() {
        return roleRepository.findAll();
    }

    public Role update(RoleDto roleDto) {
        Optional<Role> optional = roleRepository.findById(Long.valueOf(roleDto.getId()));
        if (optional.isPresent()) {
            Role role = optional.get();
            role.setName(roleDto.getName());
            return roleRepository.save(role);
        }
        return null;
    }

    public boolean delete(RoleDto roleDto) {
        Optional<Role> optional = roleRepository.findById(Long.valueOf(roleDto.getId()));
        if (optional.isPresent()) {
            roleRepository.deleteById(Long.valueOf(roleDto.getId()));
            return true;
        }
        return false;
    }
}
