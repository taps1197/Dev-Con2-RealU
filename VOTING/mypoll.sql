-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2018 at 12:16 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `election`
--

-- --------------------------------------------------------

--
-- Table structure for table `mypoll`
--

CREATE TABLE `mypoll` (
  `userid` varchar(255) NOT NULL,
  `aadharcard` varchar(255) NOT NULL,
  `faceid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mypoll`
--

INSERT INTO `mypoll` (`userid`, `aadharcard`, `faceid`, `name`) VALUES
('1', '123456789234', '6789s899sd9xs', 'taps'),
('1', '123456789234', '6789s899sd9xs', 'taps'),
('2', '54567876543456', '234rfge45greg3', 'soumya'),
('2', '54567876543456', '234rfge45greg3', 'soumya'),
('3', '34567656734567765', '34565rghgfdw6764', 'shaswat'),
('3', '34567656734567765', '34565rghgfdw6764', 'shaswat'),
('4', '43234788987654', '1234rghbvcvbjn756', 'shivani'),
('4', '43234788987654', '1234rghbvcvbjn756', 'shivani');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
