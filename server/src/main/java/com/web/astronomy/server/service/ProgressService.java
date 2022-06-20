package com.web.astronomy.server.service;

import com.web.astronomy.server.bean.ProgressBean;
import com.web.astronomy.server.dto.ProgressDto;
import com.web.astronomy.server.mapping.Progress;
import com.web.astronomy.server.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class ProgressService {

    @Autowired
    private ProgressRepository progressRepository;

    public Progress insert(ProgressDto progressDto) {
        Progress progress = new Progress();
        progress.setMarks(progressDto.getMarks());
        progress.setProgress(Integer.parseInt(progressDto.getProgress()));
        progress.setQuizId(Long.parseLong(progressDto.getQuizId()));
        progress.setUserId(Long.parseLong(progressDto.getUserId()));
        return progressRepository.save(progress);
    }

    public List<Progress> list() {
        return progressRepository.findAll();
    }

    public List<Object[]> detailedList() {
        return progressRepository.progressList();
    }

    public Progress update(ProgressDto progressDto) {
        Optional<Progress> progressOptional = progressRepository.findById(Long.valueOf(progressDto.getId()));
        if (progressOptional.isPresent()) {
            Progress progress = progressOptional.get();
            progress.setProgress(Integer.parseInt(progressDto.getProgress()));
            progress.setMarks(progressDto.getMarks());
            return progressRepository.save(progress);
        }
        return null;
    }

    public boolean delete(ProgressDto progressDto) {
        Optional<Progress> progressOptional = progressRepository.findById(Long.valueOf(progressDto.getId()));
        if (progressOptional.isPresent()) {
            progressRepository.deleteById(Long.valueOf(progressDto.getId()));
            return true;
        }
        return false;
    }
}
