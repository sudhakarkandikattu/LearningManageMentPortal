CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `reference_link` varchar(255) DEFAULT NULL
);


INSERT INTO `course` (`id`, `cid`, `reference_link`) VALUES
(1, 1, 'https://www.geeksforgeeks.org/python-programming-language/learn-python-tutorial/'),
(2, 1, 'https://www.tutorialspoint.com/python/index.htm'),
(3, 1, 'https://www.geeksforgeeks.org/php-examples/'),
(4, 1, 'https://www.tutorialspoint.com/php/index.htm');


CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `user_type` int(11) NOT NULL
);


INSERT INTO `courses` (`id`, `title`, `user_type`) VALUES
(1, 'basics of python', 1),
(2, 'basics of php', 1);



CREATE TABLE `course_questions` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `question_id` int(11) DEFAULT NULL
);

INSERT INTO `course_questions` (`id`, `cid`, `question_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 2, 5),
(6, 2, 6),
(7, 2, 7),
(8, 2, 8);


CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) DEFAULT NULL
);

INSERT INTO `questions` (`id`, `question`, `answer`) VALUES
(1, 'what is the correct extension of the Python file?', '.py'),
(2, 'Is Python code compiled or interpreted?', '.both compiled and interpreted'),
(3, 'what is used to define a block of code in Python language?', 'indentation'),
(4, 'Which keyword is used for function in Python language?', 'def'),
(5, 'PHP stands for', 'Hypertext Preprocessor'),
(6, 'what is the default file extension of PHP?', '.php'),
(7, 'what is used to display the output in PHP?', 'echo'),
(8, 'Which function is used to set cookie in PHP?', 'setcookie()');

ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cid` (`cid`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_questions`
--
ALTER TABLE `course_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cid` (`cid`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `course_questions`
--
ALTER TABLE `course_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `courses` (`id`);

--
-- Constraints for table `course_questions`
--
ALTER TABLE `course_questions`
  ADD CONSTRAINT `course_questions_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `courses` (`id`);

