package com.web.astronomy.server.controller;

import com.web.astronomy.server.dto.ContactusDto;
import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.mapping.Contactus;
import com.web.astronomy.server.repository.ContactusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/contactus")
public class ContactusController {

    @Autowired
    private ContactusRepository contactusRepository;

    @PostMapping
    public ResponseEntity insert(@RequestBody ContactusDto contactusDto) {
        Contactus contactus = new Contactus();
        contactus.setEmail(contactusDto.getEmail());
        contactus.setMessage(contactusDto.getMessage());
        contactus.setName(contactusDto.getName());
        Contactus save = contactusRepository.save(contactus);
        if (save != null) {
            return new ResponseEntity<>(save, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }
}
