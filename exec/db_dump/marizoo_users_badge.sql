-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 3.36.112.78    Database: marizoo
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users_badge`
--

DROP TABLE IF EXISTS `users_badge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_badge` (
  `users_badge_id` bigint NOT NULL AUTO_INCREMENT,
  `created_by` varchar(255) DEFAULT NULL,
  `created_date` datetime(6) DEFAULT NULL,
  `last_modified_by` varchar(255) DEFAULT NULL,
  `last_modified_date` datetime(6) DEFAULT NULL,
  `badge_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`users_badge_id`),
  KEY `FK9nuv8fo6f0iqmrji9k062jtay` (`badge_id`),
  KEY `FKmijv3q2ldldkjirgi67u2niwc` (`user_id`),
  CONSTRAINT `FK9nuv8fo6f0iqmrji9k062jtay` FOREIGN KEY (`badge_id`) REFERENCES `badge` (`badge_id`),
  CONSTRAINT `FKmijv3q2ldldkjirgi67u2niwc` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_badge`
--

LOCK TABLES `users_badge` WRITE;
/*!40000 ALTER TABLE `users_badge` DISABLE KEYS */;
INSERT INTO `users_badge` VALUES (15,NULL,NULL,NULL,NULL,3,1),(21,NULL,NULL,NULL,NULL,6,2),(22,NULL,NULL,NULL,NULL,7,2),(23,NULL,NULL,NULL,NULL,8,2),(24,NULL,NULL,NULL,NULL,9,2),(30,NULL,NULL,NULL,NULL,15,2),(31,NULL,NULL,NULL,NULL,16,2),(32,NULL,NULL,NULL,NULL,17,2),(33,NULL,NULL,NULL,NULL,18,2),(39,NULL,NULL,NULL,NULL,24,2),(40,NULL,NULL,NULL,NULL,25,2),(41,NULL,NULL,NULL,NULL,26,2),(42,NULL,NULL,NULL,NULL,27,2),(54,NULL,NULL,NULL,NULL,35,53),(55,NULL,NULL,NULL,NULL,34,3),(56,NULL,NULL,NULL,NULL,32,3),(57,NULL,NULL,NULL,NULL,34,3);
/*!40000 ALTER TABLE `users_badge` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 11:16:07
