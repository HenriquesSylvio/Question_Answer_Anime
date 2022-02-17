<?php

namespace App\Entity;

use App\Controller\ImageToVideoController;
use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiProperty;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=QuestionRepository::class)
 */
class Question
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Question;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $VideoPath;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Answer1;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Answer2;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Answer3;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Answer4;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $GoodAnswer;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestion(): ?string
    {
        return $this->Question;
    }

    public function setQuestion(string $Question): self
    {
        $this->Question = $Question;

        return $this;
    }

    public function getVideoPath(): ?string
    {
        return $this->VideoPath;
    }

    public function setVideoPath(string $VideoPath): self
    {
        $this->VideoPath = $VideoPath;

        return $this;
    }

    public function getAnswer1(): ?string
    {
        return $this->Answer1;
    }

    public function setAnswer1(string $Answer1): self
    {
        $this->Answer1 = $Answer1;

        return $this;
    }

    public function getAnswer2(): ?string
    {
        return $this->Answer2;
    }

    public function setAnswer2(string $Answer2): self
    {
        $this->Answer2 = $Answer2;

        return $this;
    }

    public function getAnswer3(): ?string
    {
        return $this->Answer3;
    }

    public function setAnswer3(string $Answer3): self
    {
        $this->Answer3 = $Answer3;

        return $this;
    }

    public function getAnswer4(): ?string
    {
        return $this->Answer4;
    }

    public function setAnswer4(string $Answer4): self
    {
        $this->Answer4 = $Answer4;

        return $this;
    }

    public function getGoodAnswer(): ?string
    {
        return $this->GoodAnswer;
    }

    public function setGoodAnswer(string $GoodAnswer): self
    {
        $this->GoodAnswer = $GoodAnswer;

        return $this;
    }
}
