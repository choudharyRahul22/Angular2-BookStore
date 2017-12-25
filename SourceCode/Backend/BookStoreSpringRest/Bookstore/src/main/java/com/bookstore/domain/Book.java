package com.bookstore.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

@Entity
public class Book implements Serializable {

	private static long serialVersionUID = 234567L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String tittle;
	private String author;
	private String publisher;
	private String publicationDate;
	private String language;
	private String category;
	private int numberOfPages;
	private String format;
	private String isbn;
	private double shippingWeight;
	private double listPrice;
	private double ourPrice;
	private boolean active;

	@Column(columnDefinition = "text")
	private String description;
	private int inStockNumber;

	@Transient
	private MultipartFile bookImage;

	public Book() {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTittle() {
		return tittle;
	}

	public void setTittle(String tittle) {
		this.tittle = tittle;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getPublicationDate() {
		return publicationDate;
	}

	public void setPublicationDate(String publicationDate) {
		this.publicationDate = publicationDate;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getNumberOfPages() {
		return numberOfPages;
	}

	public void setNumberOfPages(int numberOfPages) {
		this.numberOfPages = numberOfPages;
	}

	public String getFormat() {
		return format;
	}

	public void setFormat(String format) {
		this.format = format;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public double getShippingWeight() {
		return shippingWeight;
	}

	public void setShippingWeight(double shippingWeight) {
		this.shippingWeight = shippingWeight;
	}

	public double getListPrice() {
		return listPrice;
	}

	public void setListPrice(double listPrice) {
		this.listPrice = listPrice;
	}

	public double getOurPrice() {
		return ourPrice;
	}

	public void setOurPrice(double ourPrice) {
		this.ourPrice = ourPrice;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getInStockNumber() {
		return inStockNumber;
	}

	public void setInStockNumber(int inStockNumber) {
		this.inStockNumber = inStockNumber;
	}

	public MultipartFile getBookImage() {
		return bookImage;
	}

	public void setBookImage(MultipartFile bookImage) {
		this.bookImage = bookImage;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", tittle=" + tittle + ", author=" + author + ", publisher=" + publisher
				+ ", publicationDate=" + publicationDate + ", language=" + language + ", category=" + category
				+ ", numberOfPages=" + numberOfPages + ", format=" + format + ", isbn=" + isbn + ", shippingWeight="
				+ shippingWeight + ", listPrice=" + listPrice + ", ourPrice=" + ourPrice + ", active=" + active
				+ ", description=" + description + ", inStockNumber=" + inStockNumber + ", bookImage=" + bookImage
				+ ", getId()=" + getId() + ", getTittle()=" + getTittle() + ", getAuthor()=" + getAuthor()
				+ ", getPublisher()=" + getPublisher() + ", getPublicationDate()=" + getPublicationDate()
				+ ", getLanguage()=" + getLanguage() + ", getCategory()=" + getCategory() + ", getNumberOfPages()="
				+ getNumberOfPages() + ", getFormat()=" + getFormat() + ", getIsbn()=" + getIsbn()
				+ ", getShippingWeight()=" + getShippingWeight() + ", getListPrice()=" + getListPrice()
				+ ", getOurPrice()=" + getOurPrice() + ", isActive()=" + isActive() + ", getDescription()="
				+ getDescription() + ", getInStockNumber()=" + getInStockNumber() + ", getBookImage()=" + getBookImage()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}

}
