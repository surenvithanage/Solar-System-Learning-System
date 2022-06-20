package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.FaqDto;
import com.web.astronomy.server.mapping.Endpoint;
import com.web.astronomy.server.mapping.Faq;
import com.web.astronomy.server.repository.FaqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class FaqService {

    @Autowired
    private FaqRepository faqRepository;

    public Faq insert(FaqDto faqDto) {
        Faq faq = new Faq();
        faq.setAnswer(faqDto.getAnswer());
        faq.setQuestion(faqDto.getQuestion());
        return faqRepository.save(faq);
    }

    public List<Faq> list() {
        return faqRepository.findAll();
    }

    public Faq update(FaqDto faqDto) {
        Optional<Faq> faqOptional = faqRepository.findById(Long.valueOf(faqDto.getId()));
        if (faqOptional.isPresent()) {
            Faq faq = faqOptional.get();
            faq.setQuestion(faqDto.getQuestion());
            faq.setAnswer(faqDto.getAnswer());
            return faqRepository.save(faq);
        }
        return null;
    }

    public boolean delete(FaqDto faqDto) {
        Optional<Faq> faqOptional = faqRepository.findById(Long.valueOf(faqDto.getId()));
        if (faqOptional.isPresent()) {
            faqRepository.deleteById(Long.valueOf(faqDto.getId()));
            return true;
        }
        return false;
    }

}
