<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220217080603 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question ADD answer1 VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE question ADD answer2 VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE question ADD answer3 VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE question ADD answer4 VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE question ADD good_answer VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE question DROP answer1');
        $this->addSql('ALTER TABLE question DROP answer2');
        $this->addSql('ALTER TABLE question DROP answer3');
        $this->addSql('ALTER TABLE question DROP answer4');
        $this->addSql('ALTER TABLE question DROP good_answer');
    }
}
