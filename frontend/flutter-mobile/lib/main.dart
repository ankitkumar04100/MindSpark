import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(MindSparkApp());
}

class MindSparkApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MindSpark',
      home: HomeScreen(),
    );
  }
}
