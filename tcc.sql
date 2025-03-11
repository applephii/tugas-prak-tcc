-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Mar 2025 pada 08.33
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcc`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id`, `author`, `title`, `notes`, `createdAt`, `updatedAt`) VALUES
(1, 'Itadori Yuuji', 'Personality', 'Yuji is a fair person who truly cares for not only his comrades but anyone he views as people with their own wills, despite how deep or shallow his connection to them is. He highly commends \"the value of life,\" and to this end, he will ensure that others receive a \"proper death\". Because of this, he believes that it is morally unethical for him to take another human life, and tries to avoid any possibility of doing so unless as a last resort.', '2025-03-03 07:16:07', '2025-03-03 07:25:52'),
(2, 'Itadori Yuuji', 'Abilities and Powers', 'Overall Skill Level: Yuji is one of Tokyo Jujutsu High\'s most powerful and talented students. Satoru Gojo places him on the same level of potential as Yuta Okkotsu and Kinji Hakari, the three students who he believes will surpass his strength.[10] Despite having no connections to the jujutsu world before a few months prior to the Shibuya Incident, Yuji is able to contend with and defeat grade 1 and special grade curses. Yuji was gifted with superhuman physical abilities which he masterfully combines with his cursed energy. Yuji is also able to contain Sukuna with no ill effects, which allows him to perceive the shape of souls. This enables him to harm Mahito, whose control over the shape of his soul otherwise renders him immune to injury.[11]\n\nPoison Resistance: Since Yuji is the host to Sukuna, he has a resistance to all kinds of poison. Yuji will feel the pain from the poison, but he is mostly unaffected. This ability was first demonstrated during his fight with Junpei Yoshino when he could resist Moon Dregs\' poison. It was demonstrated again when Yuji resisted the effects of Eso and Kechizu\'s Decay.\n\nWeapon Mastery: Yuji was not trained in the use of weapons; however, due to his physical power and talent, he can still become proficient with one quickly.', '2025-03-03 07:26:33', '2025-03-03 07:26:33'),
(3, 'Itadori Yuuji', 'Appearance', 'Yuji is a young man of average height and appears to have a slender build when wearing baggy clothing, but actually has a lean and muscular physique. He also has relatively large light brown eyes and spiky pink hair (brownish blonde in the manga) that\'s styled in an undercut fashion. When becoming the vessel for Sukuna after eating his finger, he gains a second pair of eyes that only open when Sukuna controls his body along with his many markings.\n\nAt the start of the series, Yuji wore a light-colored hooded jacket, high-cuffed black pants, and white shoes. However, in the anime, his pants were denim, and his shoes were bright red. When Yuji enrolled into Tokyo Jujutsu High, he began wearing his version of the uniform; a black long sleeve shirt resembling a gakuran over a red hoodie, black pants, and red shoes.', '2025-03-03 07:27:56', '2025-03-03 07:27:56'),
(5, 'Itadori Yuuji', 'Alias', 'Sukuna\'s Vessel\nThe Tiger of West Junior High\nYuu-chan (by Kirara)\nBrat (by Sukuna)\nBrother(by Aoi Todo)', '2025-03-03 07:28:30', '2025-03-03 07:28:30');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
