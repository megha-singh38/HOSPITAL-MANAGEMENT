import 'package:flutter/material.dart';
import '../utils/app_colors.dart';
import '../widgets/doctor_card.dart';
import 'booking_screen.dart';

class DoctorsListScreen extends StatefulWidget {
  const DoctorsListScreen({super.key});

  @override
  State<DoctorsListScreen> createState() => _DoctorsListScreenState();
}

class _DoctorsListScreenState extends State<DoctorsListScreen> {
  String selectedFilter = 'All';
  final List<String> filters = ['All', 'Cardiology', 'Dermatology', 'Neurology', 'Orthopedics'];

  final List<Map<String, dynamic>> doctors = [
    {
      'name': 'Dr. Amit Patel',
      'specialty': 'Cardiology',
      'experience': 12,
      'rating': 4.9,
      'reviews': 190,
      'fee': 500,
      'distance': '2.5 km away',
      'image': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    },
    {
      'name': 'Dr. Sunita Gupta',
      'specialty': 'Dermatology',
      'experience': 8,
      'rating': 4.8,
      'reviews': 156,
      'fee': 400,
      'distance': '1.8 km away',
      'image': 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
    },
    {
      'name': 'Dr. Vikram Singh',
      'specialty': 'Neurology',
      'experience': 15,
      'rating': 4.7,
      'reviews': 203,
      'fee': 600,
      'distance': '3.2 km away',
      'image': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    },
    {
      'name': 'Dr. Neha Agarwal',
      'specialty': 'Orthopedics',
      'experience': 10,
      'rating': 4.6,
      'reviews': 178,
      'fee': 550,
      'distance': '2.1 km away',
      'image': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    },
    {
      'name': 'Dr. Ravi Mehta',
      'specialty': 'Pediatrics',
      'experience': 7,
      'rating': 4.9,
      'reviews': 245,
      'fee': 450,
      'distance': '1.5 km away',
      'image': 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
    },
  ];

  List<Map<String, dynamic>> get filteredDoctors {
    if (selectedFilter == 'All') return doctors;
    return doctors.where((doctor) => doctor['specialty'] == selectedFilter).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Doctors'),
        actions: [
          IconButton(
            icon: const Icon(Icons.search),
            onPressed: () {},
          ),
        ],
      ),
      body: Column(
        children: [
          // Filter Tabs
          Container(
            height: 50,
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: filters.length,
              itemBuilder: (context, index) {
                final filter = filters[index];
                final isSelected = filter == selectedFilter;
                return Padding(
                  padding: const EdgeInsets.only(right: 12),
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        selectedFilter = filter;
                      });
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      decoration: BoxDecoration(
                        color: isSelected ? AppColors.primary : Colors.white,
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(
                          color: isSelected ? AppColors.primary : AppColors.border,
                        ),
                      ),
                      child: Center(
                        child: Text(
                          filter,
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                            color: isSelected ? Colors.white : AppColors.textGray,
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          
          const SizedBox(height: 20),
          
          // Doctors List
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              itemCount: filteredDoctors.length,
              itemBuilder: (context, index) {
                final doctor = filteredDoctors[index];
                return Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.05),
                          blurRadius: 8,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: ListTile(
                      contentPadding: const EdgeInsets.all(16),
                      leading: CircleAvatar(
                        radius: 30,
                        backgroundImage: NetworkImage(doctor['image']),
                      ),
                      title: Text(
                        doctor['name'],
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                          color: AppColors.textDark,
                        ),
                      ),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            '${doctor['specialty']} • ${doctor['distance']}',
                            style: const TextStyle(
                              fontSize: 14,
                              color: AppColors.textGray,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Row(
                            children: [
                              const Icon(Icons.star, color: AppColors.gold, size: 16),
                              const SizedBox(width: 4),
                              Text(
                                '${doctor['rating']} (${doctor['reviews']} Reviews)',
                                style: const TextStyle(
                                  fontSize: 12,
                                  color: AppColors.textGray,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 4),
                          Text(
                            '₹${doctor['fee']} consultation',
                            style: const TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                              color: AppColors.mintGreen,
                            ),
                          ),
                        ],
                      ),
                      trailing: IconButton(
                        icon: const Icon(Icons.bookmark_border, color: AppColors.textGray),
                        onPressed: () {},
                      ),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (_) => const BookingScreen()),
                        );
                      },
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}