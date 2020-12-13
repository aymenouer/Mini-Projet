package tn.esprit.spring;
import org.junit.runner.RunWith;
import javax.annotation.Resource;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import tn.esprit.spring.service.FilesStorageService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MyprojectApplicationTests {
	  @Resource
	  FilesStorageService storageService;
	@Test
	public void contextLoads() {
		storageService.deleteAll();
	    storageService.init();
	}

}
