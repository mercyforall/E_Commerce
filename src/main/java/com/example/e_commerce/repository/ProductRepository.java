package com.example.e_commerce.repository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom query methods can be defined here if needed
    // For example:
    // List<Product> findByCategory(String category);

}
