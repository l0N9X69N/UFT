Call checkExit()
WpfWindow("Build Time: 02/06/2023").WpfTreeView("WpfTreeView").Expand "MESH" @@ hightlight id_;_2136760424_;_script infofile_;_ZIP::ssf23.xml_;_
wait 1
WpfWindow("Build Time: 02/06/2023").WpfTreeView("WpfTreeView").Expand "MESH;EW302S" @@ hightlight id_;_2136760424_;_script infofile_;_ZIP::ssf24.xml_;_
wait 1
WpfWindow("Build Time: 02/06/2023").WpfCheckBox("LabelBottom").Set "On" @@ hightlight id_;_2112809848_;_script infofile_;_ZIP::ssf25.xml_;_
wait 1
WpfWindow("Build Time: 02/06/2023").WpfButton("NEXT").Click @@ hightlight id_;_2111131192_;_script infofile_;_ZIP::ssf26.xml_;_
wait 1
WpfWindow("Version EW302SVN0U0001").WpfButton("OK").Click @@ hightlight id_;_65866_;_script infofile_;_ZIP::ssf34.xml_;_
wait 1
WpfWindow("Build Time: 02/06/2023").WpfObject("SETTING").Click 85,16 @@ hightlight id_;_2107747640_;_script infofile_;_ZIP::ssf28.xml_;_
wait 1
WpfWindow("Build Time: 02/06/2023").WpfEdit("txt_user").Set DataTable("user name", dtGlobalSheet) @@ hightlight id_;_1880517968_;_script infofile_;_ZIP::ssf29.xml_;_
wait 1
WpfWindow("Build Time: 02/06/2023").WpfEdit("txt_password").SetSecure "vnpt" @@ hightlight id_;_1880518304_;_script infofile_;_ZIP::ssf30.xml_;_
wait 1
WpfWindow("Build Time: 02/06/2023").WpfButton("Login").Click @@ hightlight id_;_2111132920_;_script infofile_;_ZIP::ssf31.xml_;_
wait 1
Function checkExit()
	If WpfWindow("Build Time: 02/06/2023").Exist(3)=False Then
		SystemUtil.Run "G:\VNPT Technology\Job\MESH 30SX\EW302S\CODE\Tool_in_tem_day\LabelBottom\LabelBottom\bin\Debug\LabelBottom.exe"
		wait(1)
	End If
End Function
