package com.web.astronomy.server.controller;

import com.web.astronomy.server.dto.ErrorDto;
import com.web.astronomy.server.dto.FaqDto;
import com.web.astronomy.server.mapping.Faq;
import com.web.astronomy.server.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/faq")
public class FaqController {
    @Autowired
    private FaqService faqService;

    @PostMapping
    public ResponseEntity insert(@RequestBody FaqDto payload) {
        Faq faq = faqService.insert(payload);
        if (faq != null) {
            return new ResponseEntity<>(faq, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity update(@RequestBody FaqDto payload) {
        Faq faq = faqService.update(payload);
        if (faq != null) {
            return new ResponseEntity<>(faq, null, HttpStatus.OK);
        } else {
            ErrorDto errorDto = new ErrorDto();
            errorDto.setErrorCode("EOO2");
            errorDto.setErrorMessage("Error occured while processing.");
            return new ResponseEntity<>(errorDto, null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity list() {
        List<Faq> faq = faqService.list();
        return new ResponseEntity<>(faq, null, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody FaqDto payload) {
        boolean result = faqService.delete(payload);
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
