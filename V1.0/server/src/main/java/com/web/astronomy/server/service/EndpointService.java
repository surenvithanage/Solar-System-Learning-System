package com.web.astronomy.server.service;

import com.web.astronomy.server.dto.EndpointDto;
import com.web.astronomy.server.mapping.Endpoint;
import com.web.astronomy.server.repository.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class EndpointService {

    @Autowired
    private EndpointRepository endpointRepository;

    public Endpoint insert(EndpointDto endpointDto) {
        Endpoint endpoint = new Endpoint();
        endpoint.setDescription(endpointDto.getDescription());
        endpoint.setTitle(endpointDto.getTitle());
        endpoint.setUri(endpointDto.getUri());
        return endpointRepository.save(endpoint);
    }

    public List<Endpoint> list() {
        return endpointRepository.findAll();
    }

    public Endpoint update(EndpointDto endpointDto) {
        Optional<Endpoint> endpointOptional = endpointRepository.findById(Long.valueOf(endpointDto.getId()));
        if (endpointOptional.isPresent()) {
            Endpoint endpoint = endpointOptional.get();
            endpoint.setUri(endpointDto.getUri());
            endpoint.setTitle(endpointDto.getTitle());
            endpoint.setDescription(endpointDto.getDescription());
            return endpointRepository.save(endpoint);
        }
        return null;
    }

    public boolean delete(EndpointDto endpointDto) {
        Optional<Endpoint> endpointOptional = endpointRepository.findById(Long.valueOf(endpointDto.getId()));
        if (endpointOptional.isPresent()) {
            endpointRepository.deleteById(Long.valueOf(endpointDto.getId()));
            return true;
        }
        return false;
    }
}
