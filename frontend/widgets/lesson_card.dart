import 'package:flutter/material.dart';

class LessonCard extends StatelessWidget {
  final String title;

  LessonCard(this.title);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(12),
        child: Text(title),
      ),
    );
  }
}
