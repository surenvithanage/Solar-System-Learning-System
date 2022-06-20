package com.web.astronomy.server.controller;

import com.web.astronomy.server.bean.ProgressBean;
import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.dto.ProgressDto;
import com.web.astronomy.server.mapping.Progress;
import com.web.astronomy.server.service.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @PostMapping
    public ResponseEntity insert(@RequestBody ProgressDto payload) {
        Progress progress = progressService.insert(payload);
        if (progress != null) {
            return new ResponseEntity<>(progress, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity update(@RequestBody ProgressDto payload) {
        Progress progress = progressService.update(payload);
        if (progress != null) {
            return new ResponseEntity<>(progress, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity list() {
        List<Progress> progress = progressService.list();
        return new ResponseEntity<>(progress, null, HttpStatus.OK);
    }

    @GetMapping("/detailed")
    public ResponseEntity detailedList() {
        List<Object[]> progress = progressService.detailedList();
        return new ResponseEntity<>(progress, null, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody ProgressDto payload) {
        boolean result = progressService.delete(payload);
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
