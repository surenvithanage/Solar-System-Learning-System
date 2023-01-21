package com.web.astronomy.server.controller;

import com.web.astronomy.server.dto.EndpointDto;
import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.mapping.Endpoint;
import com.web.astronomy.server.service.EndpointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/endpoint")
public class EndpointController {

    @Autowired
    private EndpointService endpointService;

    @PostMapping
    public ResponseEntity insert(@RequestBody EndpointDto endpointDto) {
        Endpoint endpoint = endpointService.insert(endpointDto);
        if (endpoint != null) {
            return new ResponseEntity<>(endpoint, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity update(@RequestBody EndpointDto endpointDto) {
        Endpoint endpoint = endpointService.update(endpointDto);
        if (endpoint != null) {
            return new ResponseEntity<>(endpoint, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity list() {
        List<Endpoint> endpoint = endpointService.list();
        return new ResponseEntity<>(endpoint, null, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody EndpointDto endpointDto) {
        boolean result = endpointService.delete(endpointDto);
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
