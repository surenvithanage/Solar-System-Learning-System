package com.web.astronomy.server.controller;

import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.dto.UserDto;
import com.web.astronomy.server.mapping.User;
import com.web.astronomy.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity insert(@RequestBody UserDto payload) {
        User user = userService.insert(payload);
        if (user != null) {
            return new ResponseEntity<>(user, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity update(@RequestBody UserDto payload) {
        User user = userService.update(payload);
        if (user != null) {
            return new ResponseEntity<>(user, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity list() {
        List<User> users = userService.list();
        return new ResponseEntity<>(users, null, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody UserDto payload) {
        boolean result = userService.delete(payload);
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
