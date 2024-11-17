-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: cook
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cookingtechniques`
--

DROP TABLE IF EXISTS `cookingtechniques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookingtechniques` (
  `cooking_technique_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `special_parameter` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cooking_technique_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookingtechniques`
--

LOCK TABLES `cookingtechniques` WRITE;
/*!40000 ALTER TABLE `cookingtechniques` DISABLE KEYS */;
/*!40000 ALTER TABLE `cookingtechniques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dietplans`
--

DROP TABLE IF EXISTS `dietplans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dietplans` (
  `diet_plan_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `goal` varchar(255) NOT NULL,
  `time_period` varchar(255) NOT NULL,
  `daily_recipe_combination` text,
  `nutritional_analysis` text,
  PRIMARY KEY (`diet_plan_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `dietplans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dietplans`
--

LOCK TABLES `dietplans` WRITE;
/*!40000 ALTER TABLE `dietplans` DISABLE KEYS */;
/*!40000 ALTER TABLE `dietplans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forumposts`
--

DROP TABLE IF EXISTS `forumposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forumposts` (
  `forum_post_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `post_time` datetime NOT NULL,
  PRIMARY KEY (`forum_post_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `forumposts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forumposts`
--

LOCK TABLES `forumposts` WRITE;
/*!40000 ALTER TABLE `forumposts` DISABLE KEYS */;
/*!40000 ALTER TABLE `forumposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forumposttopicsections`
--

DROP TABLE IF EXISTS `forumposttopicsections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forumposttopicsections` (
  `forum_post_topic_section_id` int NOT NULL AUTO_INCREMENT,
  `forum_post_id` int NOT NULL,
  `topic_section_id` int NOT NULL,
  PRIMARY KEY (`forum_post_topic_section_id`),
  UNIQUE KEY `unique_forum_post_topic_section` (`forum_post_id`,`topic_section_id`),
  KEY `topic_section_id` (`topic_section_id`),
  CONSTRAINT `forumposttopicsections_ibfk_1` FOREIGN KEY (`forum_post_id`) REFERENCES `forumposts` (`forum_post_id`),
  CONSTRAINT `forumposttopicsections_ibfk_2` FOREIGN KEY (`topic_section_id`) REFERENCES `topicsections` (`topic_section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forumposttopicsections`
--

LOCK TABLES `forumposttopicsections` WRITE;
/*!40000 ALTER TABLE `forumposttopicsections` DISABLE KEYS */;
/*!40000 ALTER TABLE `forumposttopicsections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `ingredient_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`ingredient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `recipe_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cooking_steps` text NOT NULL,
  `taste_characteristics` varchar(255) DEFAULT NULL,
  `cooking_technique_list` varchar(255) DEFAULT NULL,
  `user_rating_list` text,
  `usage_count` int DEFAULT '0',
  PRIMARY KEY (`recipe_id`),
  KEY `idx_recipe_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasteoptions`
--

DROP TABLE IF EXISTS `tasteoptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasteoptions` (
  `taste_option_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `intensity_level` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`taste_option_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasteoptions`
--

LOCK TABLES `tasteoptions` WRITE;
/*!40000 ALTER TABLE `tasteoptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasteoptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topicsections`
--

DROP TABLE IF EXISTS `topicsections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topicsections` (
  `topic_section_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`topic_section_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topicsections`
--

LOCK TABLES `topicsections` WRITE;
/*!40000 ALTER TABLE `topicsections` DISABLE KEYS */;
/*!40000 ALTER TABLE `topicsections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usercookingtechniqueselections`
--

DROP TABLE IF EXISTS `usercookingtechniqueselections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usercookingtechniqueselections` (
  `user_cooking_technique_selection_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `cooking_technique_id` int NOT NULL,
  PRIMARY KEY (`user_cooking_technique_selection_id`),
  UNIQUE KEY `unique_user_cooking_technique` (`user_id`,`cooking_technique_id`),
  KEY `cooking_technique_id` (`cooking_technique_id`),
  CONSTRAINT `usercookingtechniqueselections_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `usercookingtechniqueselections_ibfk_2` FOREIGN KEY (`cooking_technique_id`) REFERENCES `cookingtechniques` (`cooking_technique_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercookingtechniqueselections`
--

LOCK TABLES `usercookingtechniqueselections` WRITE;
/*!40000 ALTER TABLE `usercookingtechniqueselections` DISABLE KEYS */;
/*!40000 ALTER TABLE `usercookingtechniqueselections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useringredientselections`
--

DROP TABLE IF EXISTS `useringredientselections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useringredientselections` (
  `user_ingredient_selection_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  PRIMARY KEY (`user_ingredient_selection_id`),
  UNIQUE KEY `unique_user_ingredient` (`user_id`,`ingredient_id`),
  KEY `ingredient_id` (`ingredient_id`),
  CONSTRAINT `useringredientselections_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `useringredientselections_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`ingredient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useringredientselections`
--

LOCK TABLES `useringredientselections` WRITE;
/*!40000 ALTER TABLE `useringredientselections` DISABLE KEYS */;
/*!40000 ALTER TABLE `useringredientselections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userrecipecollections`
--

DROP TABLE IF EXISTS `userrecipecollections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userrecipecollections` (
  `user_recipe_collection_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `recipe_id` int NOT NULL,
  PRIMARY KEY (`user_recipe_collection_id`),
  UNIQUE KEY `unique_user_recipe` (`user_id`,`recipe_id`),
  KEY `recipe_id` (`recipe_id`),
  CONSTRAINT `userrecipecollections_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `userrecipecollections_ibfk_2` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userrecipecollections`
--

LOCK TABLES `userrecipecollections` WRITE;
/*!40000 ALTER TABLE `userrecipecollections` DISABLE KEYS */;
/*!40000 ALTER TABLE `userrecipecollections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userreciperatings`
--

DROP TABLE IF EXISTS `userreciperatings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userreciperatings` (
  `user_recipe_rating_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `recipe_id` int NOT NULL,
  `rating` int NOT NULL,
  `feedback_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_recipe_rating_id`),
  UNIQUE KEY `unique_user_recipe_rating` (`user_id`,`recipe_id`),
  KEY `recipe_id` (`recipe_id`),
  CONSTRAINT `userreciperatings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `userreciperatings_ibfk_2` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userreciperatings`
--

LOCK TABLES `userreciperatings` WRITE;
/*!40000 ALTER TABLE `userreciperatings` DISABLE KEYS */;
/*!40000 ALTER TABLE `userreciperatings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_remember_password` tinyint DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  KEY `idx_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertastepreferences`
--

DROP TABLE IF EXISTS `usertastepreferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertastepreferences` (
  `user_taste_preference_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `taste_option_id` int NOT NULL,
  PRIMARY KEY (`user_taste_preference_id`),
  UNIQUE KEY `unique_user_taste_option` (`user_id`,`taste_option_id`),
  KEY `taste_option_id` (`taste_option_id`),
  CONSTRAINT `usertastepreferences_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `usertastepreferences_ibfk_2` FOREIGN KEY (`taste_option_id`) REFERENCES `tasteoptions` (`taste_option_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertastepreferences`
--

LOCK TABLES `usertastepreferences` WRITE;
/*!40000 ALTER TABLE `usertastepreferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `usertastepreferences` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-12 20:51:19
