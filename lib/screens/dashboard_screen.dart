import 'package:flutter/material.dart';
import '../utils/app_colors.dart';
import '../widgets/health_summary_card.dart';
import '../widgets/doctor_card.dart';
import 'doctors_list_screen.dart';
import 'booking_screen.dart';
import 'profile_screen.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  int _selectedIndex = 0;
  String currentLocation = "Andheri West, Mumbai";

  String getGreeting() {
    final hour = DateTime.now().hour;
    if (hour < 12) return "Good morning!";
    if (hour < 17) return "Good afternoon!";
    return "Good evening!";
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header
              Row(
                children: [
                  const CircleAvatar(
                    radius: 25,
                    backgroundImage: NetworkImage(
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          getGreeting(),
                          style: const TextStyle(
                            fontSize: 14,
                            color: AppColors.textGray,
                          ),
                        ),
                        const Text(
                          'Rajesh Kumar 👋',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                            color: AppColors.textDark,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Stack(
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: const BoxDecoration(
                          color: AppColors.mintGreen,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(
                          Icons.notifications,
                          color: Colors.white,
                          size: 20,
                        ),
                      ),
                      Positioned(
                        top: 0,
                        right: 0,
                        child: Container(
                          width: 18,
                          height: 18,
                          decoration: const BoxDecoration(
                            color: AppColors.error,
                            shape: BoxShape.circle,
                          ),
                          child: const Center(
                            child: Text(
                              '3',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 10,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              
              const SizedBox(height: 20),
              
              // Location
              GestureDetector(
                onTap: () => _showLocationModal(),
                child: Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(12),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.05),
                        blurRadius: 8,
                        offset: const Offset(0, 2),
                      ),
                    ],
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.location_on, color: AppColors.primary),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              'Your Location',
                              style: TextStyle(
                                fontSize: 12,
                                color: AppColors.textGray,
                              ),
                            ),
                            Text(
                              currentLocation,
                              style: const TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: AppColors.textDark,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const Icon(Icons.keyboard_arrow_down, color: AppColors.textGray),
                    ],
                  ),
                ),
              ),
              
              const SizedBox(height: 30),
              
              // Hero Section
              const Text(
                'How are you feeling today?',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w700,
                  color: AppColors.textDark,
                ),
              ),
              
              const SizedBox(height: 24),
              
              // Search Bar
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.08),
                      blurRadius: 12,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: const Row(
                  children: [
                    Icon(Icons.search, color: AppColors.textGray),
                    SizedBox(width: 12),
                    Expanded(
                      child: TextField(
                        decoration: InputDecoration(
                          hintText: 'Search a doctor, medicine, etc...',
                          border: InputBorder.none,
                          hintStyle: TextStyle(color: AppColors.textGray),
                        ),
                      ),
                    ),
                    Icon(Icons.mic, color: AppColors.primary),
                  ],
                ),
              ),
              
              const SizedBox(height: 30),
              
              // Health Summary Cards
              const Text(
                'Health Summary',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                  color: AppColors.textDark,
                ),
              ),
              
              const SizedBox(height: 16),
              
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    HealthSummaryCard(
                      icon: Icons.calendar_today,
                      title: 'Upcoming Appointment',
                      subtitle: 'Today, 2:30 PM',
                      detail: 'Dr. Amit Patel',
                      color: AppColors.primary,
                      onTap: () {},
                    ),
                    const SizedBox(width: 12),
                    HealthSummaryCard(
                      icon: Icons.description,
                      title: 'Pending Reports',
                      subtitle: '2 Reports',
                      detail: 'Blood Test, X-Ray',
                      color: AppColors.gold,
                      onTap: () {},
                    ),
                    const SizedBox(width: 12),
                    HealthSummaryCard(
                      icon: Icons.medication,
                      title: 'Medicine Reminder',
                      subtitle: '3 Pending',
                      detail: 'Next: 6:00 PM',
                      color: AppColors.mintGreen,
                      onTap: () {},
                    ),
                  ],
                ),
              ),
              
              const SizedBox(height: 30),
              
              // Quick Actions
              const Text(
                'Quick Actions',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                  color: AppColors.textDark,
                ),
              ),
              
              const SizedBox(height: 16),
              
              GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 4,
                mainAxisSpacing: 12,
                crossAxisSpacing: 12,
                children: [
                  _buildQuickAction(Icons.calendar_month, 'Book\nAppointment', () {
                    Navigator.push(context, MaterialPageRoute(builder: (_) => const BookingScreen()));
                  }),
                  _buildQuickAction(Icons.local_hospital, 'Find\nDoctor', () {
                    Navigator.push(context, MaterialPageRoute(builder: (_) => const DoctorsListScreen()));
                  }),
                  _buildQuickAction(Icons.local_shipping, 'Pharmacy\nDelivery', () {}),
                  _buildQuickAction(Icons.credit_card, 'Health\nCard', () {}),
                ],
              ),
              
              const SizedBox(height: 30),
              
              // Recommended Doctors
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Recommended Doctors',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w600,
                      color: AppColors.textDark,
                    ),
                  ),
                  TextButton(
                    onPressed: () {
                      Navigator.push(context, MaterialPageRoute(builder: (_) => const DoctorsListScreen()));
                    },
                    child: const Text('See All'),
                  ),
                ],
              ),
              
              const SizedBox(height: 16),
              
              GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 2,
                mainAxisSpacing: 16,
                crossAxisSpacing: 16,
                childAspectRatio: 0.8,
                children: [
                  DoctorCard(
                    name: 'Dr. Amit Patel',
                    specialty: 'Cardiology • 12 years exp',
                    rating: 4.9,
                    reviews: 190,
                    fee: 500,
                    distance: '2.5 km away',
                    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (_) => const BookingScreen()));
                    },
                  ),
                  DoctorCard(
                    name: 'Dr. Sunita Gupta',
                    specialty: 'Dermatology • 8 years exp',
                    rating: 4.8,
                    reviews: 156,
                    fee: 400,
                    distance: '1.8 km away',
                    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (_) => const BookingScreen()));
                    },
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
          if (index == 2) {
            Navigator.push(context, MaterialPageRoute(builder: (_) => const ProfileScreen()));
          }
        },
        type: BottomNavigationBarType.fixed,
        selectedItemColor: AppColors.primary,
        unselectedItemColor: AppColors.textGray,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.access_time), label: 'Queue'),
          BottomNavigationBarItem(icon: Icon(Icons.folder), label: 'Records'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }

  Widget _buildQuickAction(IconData icon, String label, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.08),
              blurRadius: 12,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: AppColors.primary, size: 24),
            const SizedBox(height: 8),
            Text(
              label,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w500,
                color: AppColors.textDark,
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _showLocationModal() {
    showModalBottomSheet(
      context: context,
      builder: (context) => Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text(
              'Select Location',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
            ),
            const SizedBox(height: 20),
            ListTile(
              leading: const Icon(Icons.location_on, color: AppColors.primary),
              title: const Text('Andheri West'),
              subtitle: const Text('Mumbai, Maharashtra'),
              onTap: () {
                setState(() {
                  currentLocation = 'Andheri West, Mumbai';
                });
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: const Icon(Icons.location_on, color: AppColors.primary),
              title: const Text('Bandra East'),
              subtitle: const Text('Mumbai, Maharashtra'),
              onTap: () {
                setState(() {
                  currentLocation = 'Bandra East, Mumbai';
                });
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}