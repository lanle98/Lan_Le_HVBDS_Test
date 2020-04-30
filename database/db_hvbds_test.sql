-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 30, 2020 at 07:08 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hvbds_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_investors`
--

CREATE TABLE `tbl_investors` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `orderId` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_investors`
--

INSERT INTO `tbl_investors` (`id`, `first_name`, `last_name`, `email`, `phone`, `orderId`) VALUES
(11, 'Lan', 'Le', 'lekienlan98@gmail.com', '5196141218', '717370690891');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `budget` int(20) NOT NULL,
  `thumbnail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`id`, `name`, `budget`, `thumbnail`) VALUES
(1, 'Nha Trang', 10000000, 'project1.jpeg'),
(2, 'Đà Nẵng', 20000000, 'project2.jpeg'),
(3, 'Thành Phố Hồ Chí Minh', 12300000, 'project3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_transactions`
--

CREATE TABLE `tbl_transactions` (
  `id` int(11) NOT NULL,
  `orderId` varchar(50) NOT NULL,
  `amount` varchar(30) NOT NULL,
  `transId` varchar(50) NOT NULL,
  `message` varchar(20) NOT NULL,
  `responseTime` varchar(20) NOT NULL,
  `signature` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_transactions`
--

INSERT INTO `tbl_transactions` (`id`, `orderId`, `amount`, `transId`, `message`, `responseTime`, `signature`) VALUES
(14, '717370690891', '500000', '2316729488', 'Success', '2020-04-30 14:08:06', '6be6e312fb948209b3aed7dac56caeba178c88fad30c28c4a22f3bd11ffc80ac');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_investors`
--
ALTER TABLE `tbl_investors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_transactions`
--
ALTER TABLE `tbl_transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_investors`
--
ALTER TABLE `tbl_investors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_transactions`
--
ALTER TABLE `tbl_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
