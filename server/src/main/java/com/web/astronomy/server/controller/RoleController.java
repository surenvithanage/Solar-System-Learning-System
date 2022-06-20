package com.web.astronomy.server.controller;

import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.dto.RoleDto;
import com.web.astronomy.server.mapping.Role;
import com.web.astronomy.server.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PostMapping
    public ResponseEntity insert(@RequestBody RoleDto payload) {
        Role role = roleService.insert(payload);
        if (role != null) {
            return new ResponseEntity<>(role, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity update(@RequestBody RoleDto payload) {
        Role role = roleService.update(payload);
        if (role != null) {
            return new ResponseEntity<>(role, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity list() {
        List<Role> roles = roleService.list();
        return new ResponseEntity<>(roles, null, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody RoleDto payload) {
        boolean result = roleService.delete(payload);
        if (result) {
            return new ResponseEntity<>(result, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO3");
            errorDto.setErrorMessage("Record not found.");
            return new ResponseEntity<>(result, null, HttpStatus.BAD_REQUEST);
        }
    }
}
