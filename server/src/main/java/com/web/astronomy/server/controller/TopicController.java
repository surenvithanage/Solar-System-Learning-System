package com.web.astronomy.server.controller;

import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.dto.TopicDto;
import com.web.astronomy.server.mapping.Topic;
import com.web.astronomy.server.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/topic")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @PostMapping
    public ResponseEntity insert(@RequestBody TopicDto payload) {
        Topic topic = topicService.insert(payload);
        if (topic != null) {
            return new ResponseEntity<>(topic, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity update(@RequestBody TopicDto payload) {
        Topic topic = topicService.update(payload);
        if (topic != null) {
            return new ResponseEntity<>(topic, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity list() {
        List<Topic> topics = topicService.list();
        return new ResponseEntity<>(topics, null, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody TopicDto payload) {
        boolean result = topicService.delete(payload);
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
