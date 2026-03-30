// 1.设置最大宽度 内容未达到也会展示maxwidth  则使用ConstrainedBox即可

// 2.想要在初始化initState里面使用context，会为空的情况(例如使用showDialog时)
// Future.delayed(Duration.zero).then((value) {
//   //使用context
// });

// 3.使用showDialog context传来传去时，这时候使用Provider中的context报错，可以将build中的context先存下来 再用


// 4 showModalBottomSheet  键盘弹出可以使用  
// showModalBottomSheet(
//   context: context,
//   builder: (BuildContext context) {
//     return AnimatedPadding(
//       padding: EdgeInsets.only(
//         bottom: MediaQuery.of(context).viewInsets.bottom,
//       ),
//       duration: Duration.zero,
//       child: body
//     );
//   }
// )

//5.遇到无法自适应容器尺寸资源，可以url获取宽高比  使用aspectRatio 