package com.web.astronomy.server.controller;

import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.dto.SubTopicDto;
import com.web.astronomy.server.mapping.Subtopic;
import com.web.astronomy.server.service.SubTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/subtopic")
public class SubTopicController {

    @Autowired
    private SubTopicService subTopicService;

    @PostMapping
    public ResponseEntity insert(@RequestBody SubTopicDto payload) {
        Subtopic subtopic = subTopicService.insert(payload);
        if (subtopic != null) {
            return new ResponseEntity<>(subtopic, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity update(@RequestBody SubTopicDto payload) {
        Subtopic subtopic = subTopicService.update(payload);
        if (subtopic != null) {
            return new ResponseEntity<>(subtopic, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity list() {
        List<Subtopic> subtopics = subTopicService.list();
        return new ResponseEntity<>(subtopics, null, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody SubTopicDto payload) {
        boolean result = subTopicService.delete(payload);
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
