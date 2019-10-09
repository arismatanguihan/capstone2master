-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2019 at 05:42 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone2final`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookrequestdetails`
--

CREATE TABLE `bookrequestdetails` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `book_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookrequestdetails`
--

INSERT INTO `bookrequestdetails` (`id`, `quantity`, `status`, `order_id`, `book_id`) VALUES
(95, 4, 'Declined', 49, 54),
(96, 1, 'Declined', 49, 56),
(97, 1, 'Accepted', 49, 52),
(98, 1, 'Accepted', 49, 49),
(99, 2, 'Accepted', 49, 58),
(100, 2, 'Pending', 49, 55);

-- --------------------------------------------------------

--
-- Table structure for table `bookrequests`
--

CREATE TABLE `bookrequests` (
  `id` int(11) NOT NULL,
  `date` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookrequests`
--

INSERT INTO `bookrequests` (`id`, `date`, `user_id`) VALUES
(1, '2019-09-17 00:08:18.000000', 4),
(2, '2019-09-17 00:10:07.000000', 4),
(3, '2019-09-17 00:11:24.000000', 4),
(4, '2019-09-17 00:13:11.000000', 4),
(5, '2019-09-17 00:15:44.000000', 4),
(6, '2019-09-17 00:15:46.000000', 4),
(7, '2019-09-17 00:15:47.000000', 4),
(8, '2019-09-17 00:16:55.000000', 4),
(9, '2019-09-17 00:19:30.000000', 4),
(10, '2019-09-17 00:20:30.000000', 4),
(11, '2019-09-17 00:21:40.000000', 4),
(12, '2019-09-17 00:21:48.000000', 4),
(13, '2019-09-17 00:22:56.000000', 4),
(14, '2019-09-17 00:27:24.000000', 4),
(15, '2019-09-17 00:28:19.000000', 4),
(16, '2019-09-17 00:28:26.000000', 4),
(17, '2019-09-17 00:28:42.000000', 4),
(18, '2019-09-17 00:29:01.000000', 4),
(19, '2019-09-17 00:29:14.000000', 4),
(20, '2019-09-17 00:36:39.000000', 4),
(21, '2019-09-17 00:38:01.000000', 4),
(22, '2019-09-17 00:40:20.000000', 4),
(23, '2019-09-17 00:41:11.000000', 4),
(24, '2019-09-17 00:42:48.000000', 4),
(25, '2019-09-17 00:43:18.000000', 4),
(26, '2019-09-17 00:44:16.000000', 4),
(27, '2019-09-17 00:45:09.000000', 4),
(28, '2019-09-17 00:46:07.000000', 4),
(29, '2019-09-17 00:46:20.000000', 4),
(30, '2019-09-23 10:40:30.000000', 4),
(31, '2019-10-07 07:53:17.000000', 4),
(32, '2019-10-07 08:43:14.000000', 85),
(33, '2019-10-07 09:35:45.000000', 85),
(34, '2019-10-07 09:39:46.000000', 85),
(35, '2019-10-07 19:55:59.000000', 85),
(36, '2019-10-07 19:58:16.000000', 85),
(37, '2019-10-07 20:44:53.000000', 85),
(38, '2019-10-08 19:57:42.000000', 85),
(39, '2019-10-08 20:00:36.000000', 85),
(40, '2019-10-08 20:24:45.000000', 85),
(41, '2019-10-08 20:25:44.000000', 85),
(42, '2019-10-08 20:38:14.000000', 85),
(43, '2019-10-08 20:48:34.000000', 85),
(44, '2019-10-08 20:52:04.000000', 85),
(45, '2019-10-08 20:54:11.000000', 85),
(46, '2019-10-08 21:18:23.000000', 85),
(47, '2019-10-08 22:18:52.000000', 85),
(48, '2019-10-09 07:19:45.000000', 85),
(49, '2019-10-09 07:22:17.000000', 85);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `format_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `genre`, `author`, `publisher`, `price`, `image`, `format_id`) VALUES
(44, 'Tokyo Ghoul Re Volume 12', 'Action', 'Sui Ishida', 'Viz Media', 620, '71T2aoXdJjL.jpg', NULL),
(49, 'Game of Thrones', 'Fantasy', 'George R.R. Martin', 'Scholastic Inc.', 1500, '91dSMhdIzTL.jpg', NULL),
(51, 'Harry Potter and the Half-Blood Prince', 'Fantasy', 'J.K. Rowling', 'Anvil Publishing', 1500, '519RmXyy9EL.jpg', 3),
(52, 'Tokyo Ghoul Re Volume 2', 'Action', 'Sui Ishida', 'Viz Media', 620, '9781421594972_p0_v1_s550x406.jpg', 4),
(54, 'The Lord of the Rings', 'Fantasy', 'J.R.R. Tolkien', 'Scholastic Inc.', 1500, '51EstVXM1UL._SX331_BO1,204,203,200_.jpg', 3),
(55, 'Harry Potter and the Deathly Hallows', 'Fantasy', 'J.K. Rowling', 'Scholastic Inc.', 1500, '9781408855713_309030.jpeg', 3),
(56, 'Tokyo Ghoul Re Volume 1', 'Action', 'Sui Ishida', 'Viz Media', 620, '51RYNvJAzZL.jpg', 4),
(57, 'Land of the Lustrous Volume 8', 'Fantasy', 'Haruko Ichikawa', 'Viz Media', 620, '918GInBXksL.jpg', 4),
(58, 'The Hobbit', 'Fantasy', 'J.R.R. Tolkien', 'Scholastic Inc.', 1500, '91b0C2YNSrL.jpg', 3);

-- --------------------------------------------------------

--
-- Table structure for table `formats`
--

CREATE TABLE `formats` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formats`
--

INSERT INTO `formats` (`id`, `name`) VALUES
(3, 'Hardcover'),
(4, 'Paperback');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role_id`) VALUES
(3, 'zuitt', '$2a$10$1W77KTgdLtJPXGkrxVIrWuVJjQiLa9sT4ii7.SGWmdPjkQEfJCkVi', 1),
(4, 'Aris', '$2a$10$T8oQOBLzuFTJAjE9otoySeDqEoCQTbkIBt5pdqEMsc9B897GvUQGS', 2),
(85, 'user', '$2a$10$ye20WGaNIYf5knKBY3EPVeYkJQ6ZqZOuBvycrk4GePyiz8x6mbcMq', 2),
(86, 'admin', '$2a$10$lbaYsJyokxpbzoOL9HATl.zpsglNbmXthdieSqo5U5CglVLM5T.Tq', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookrequestdetails`
--
ALTER TABLE `bookrequestdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookrequests`
--
ALTER TABLE `bookrequests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`format_id`);

--
-- Indexes for table `formats`
--
ALTER TABLE `formats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookrequestdetails`
--
ALTER TABLE `bookrequestdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `bookrequests`
--
ALTER TABLE `bookrequests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `formats`
--
ALTER TABLE `formats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`format_id`) REFERENCES `formats` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
