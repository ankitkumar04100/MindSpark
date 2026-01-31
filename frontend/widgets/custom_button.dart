import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final String text;
  CustomButton(this.text);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      child: Text(text),
    );
  }
}
