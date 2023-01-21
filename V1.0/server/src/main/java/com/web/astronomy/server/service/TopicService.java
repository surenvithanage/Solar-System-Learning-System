package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.RoleDto;
import com.web.astronomy.server.dto.TopicDto;
import com.web.astronomy.server.mapping.Subtopic;
import com.web.astronomy.server.mapping.Topic;
import com.web.astronomy.server.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    public Topic insert(TopicDto topicDto) {
        Topic topic = new Topic();
        topic.setDescription(topicDto.getDescription());
        topic.setTitle(topicDto.getTitle());
        return topicRepository.save(topic);
    }

    public List<Topic> list() {
        return topicRepository.findAll();
    }

    public Topic update(TopicDto topicDto) {
        Optional<Topic> optional = topicRepository.findById(Long.valueOf(topicDto.getId()));
        if (optional.isPresent()) {
            Topic topic = optional.get();
            topic.setTitle(topicDto.getTitle());
            topic.setDescription(topicDto.getDescription());
            return topicRepository.save(topic);
        }
        return null;
    }

    public boolean delete(TopicDto topicDto) {
        Optional<Topic> optional = topicRepository.findById(Long.valueOf(topicDto.getId()));
        if (optional.isPresent()) {
            topicRepository.deleteById(Long.valueOf(topicDto.getId()));
            return true;
        }
        return false;
    }
}
