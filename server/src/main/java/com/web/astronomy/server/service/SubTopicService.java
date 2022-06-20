package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.RoleDto;
import com.web.astronomy.server.dto.SubTopicDto;
import com.web.astronomy.server.dto.TopicDto;
import com.web.astronomy.server.mapping.Role;
import com.web.astronomy.server.mapping.Subtopic;
import com.web.astronomy.server.mapping.Topic;
import com.web.astronomy.server.repository.SubTopicRepository;
import com.web.astronomy.server.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class SubTopicService {

    @Autowired
    private SubTopicRepository subTopicRepository;

    @Autowired
    private TopicRepository topicRepository;

    public Subtopic insert(SubTopicDto subTopicDto) {
        Subtopic subtopic = new Subtopic();
        subtopic.setTitle(subTopicDto.getDescription());
        subtopic.setDescription(subTopicDto.getTitle());
        Optional<Topic> optionalTopic = topicRepository.findById(Long.valueOf(subTopicDto.getTopicId()));
        if (optionalTopic.isPresent()) {
            subtopic.setTopic(optionalTopic.get());
        } else {
            subtopic.setTopic(null);
        }
        return subTopicRepository.save(subtopic);
    }

    public List<Subtopic> list() {
        return subTopicRepository.findAll();
    }

    public Subtopic update(SubTopicDto subTopicDto) {
        Optional<Subtopic> optional = subTopicRepository.findById(Long.valueOf(subTopicDto.getId()));
        if (optional.isPresent()) {
            Subtopic subtopic = optional.get();
            subtopic.setTitle(subTopicDto.getTitle());
            subtopic.setDescription(subTopicDto.getDescription());
            return subTopicRepository.save(subtopic);
        }
        return null;
    }

    public boolean delete(SubTopicDto subTopicDto) {
        Optional<Subtopic> optional = subTopicRepository.findById(Long.valueOf(subTopicDto.getId()));
        if (optional.isPresent()) {
            subTopicRepository.deleteById(Long.valueOf(subTopicDto.getId()));
            return true;
        }
        return false;
    }
}
