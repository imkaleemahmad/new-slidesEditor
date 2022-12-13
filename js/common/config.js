var localConfig = {
	languages : {
		// "cz" : {
		// 	//tool bar
		// 	toolBar_save 			: "保存",
		// 	toolBar_import 			: "导入幻灯片文件",
		// 	toolBar_openFileSystem 	: "打开保存文件保存目录",
		// 	toolBar_preview 		: "预览",
		// 	toolBar_setAnimation 	: "更改幻灯片过渡动画",
		// 	toolBar_addVideo 		: "添加视频(暂时只支持Mmp4格式)",
		// 	toolBar_addImage 		: "插入一张图片",
		// 	toolBar_addText 		: "插入文本输入框",
		// 	toolBar_addCode 		: "插入代码编辑框",
		// 	toolBar_changeScale		: "更改幻灯片分辨率比例",
		// 	toolBar_help : '帮助',
		// 	toolBar_mapEditing : "幻灯片位置拖拽编辑",
		// 	//animation
		// 	anim_slider 			: "幻灯片",
		// 	anim_sliderZoom 		: "放大幻灯片",
		// 	anim_rotateLeft 		: "向左旋转",
		// 	anim_rotateRight 		: "向右旋转",
		// 	anim_reverse 			: "垂直翻转",
		// 	anim_label				: "过渡动画",
		// 	// shape bar
		// 	shape_triangle : "插入三角形",
		// 	shape_circular : "插入圆形",
		// 	shape_rectangle : "插入矩形",
		// 	shape_heart : "插入心形",
		// 	shape_star : "插入星形",
		// 	shape_message : "插入消息框图形",
		// 	shape_moon : "插入月牙形",
		// 	shape_polygon : "插入多角形",
		// 	shape_doodle : "插入自定义图形",
		// 	//canvas menu
		// 	canvasMenu_delete : "删除",
		// 	canvasMenu_copy : "复制",
		// 	canvasMenu_cut : "剪切",
		// 	canvasMenu_paste : "粘贴",
		// 	canvasMenu_layerForward : '上移一层',
		// 	canvasMenu_layerBackward : '下移一层',
		// 	canvasMenu_layerFont : '置顶',
		// 	canvasMenu_layerBack : '置底',
		// 	canvasMenu_background : '背景',
		// 	canvasMenu_settings : '属性',
		// 	canvasMenu_programLanguage : '编程语言',
		// 	canvasMenu_theme : '主题',

		// 	viewMenu_create : '新建',
		// 	viewMenu_insert : '插入',
		// 	viewMenu_delete : '删除',
		// 	viewMenu_copy : '复制',
		// 	viewMenu_paste : '粘贴',
		// 	settings_background : "背景设置",
		// 	settings_border : "边框设置",
		// 	settings_shadow : "阴影",
		// 	settings_transform : "变换",

		// 	settings_title_bgColor : '背景色',
		// 	settings_title_borderAttribute : '边框属性',
		// 	settings_title_bgAttribute : '背景属性',
		// 	settings_title_boxShadowColor : '阴影颜色',
		// 	settings_title_boxShadowAttr : '阴影属性',
		// 	settings_title_rotate : '旋转',
		// 	settings_title_animation : '动画',

		// 	settings_item_red : '红',
		// 	settings_item_green : '绿',
		// 	settings_item_blue : '蓝',
		// 	settings_item_bgColor : '背景色',
		// 	settings_item_opacity : '透明度',
		// 	settings_item_fontSize : '字体大小',
		// 	settings_item_borderWidth : '宽带',
		// 	settings_item_borderType : '类型',
		// 	settings_item_angle : "角度",
		// 	settings_item_animType : "类型",

		// 	settings_item_animType_none : "无",
		// 	settings_item_animType_rotation : "旋转",
		// 	settings_item_animType_zoom : "缩放",
		// 	settings_item_animType_reverseLR : "左右翻转",
		// 	settings_item_animType_reverseTB : "上下翻转",
		// 	settings_item_animType_moveTB : "上下移动",
		// 	settings_item_animType_moveLR : "左右移动",
		// 	settings_item_animType_roundCCW : "逆时针绕行",
		// 	settings_item_animType_roundCW : "顺时针绕行",
		// 	settings_item_animType_swingCW : "顺时针摆动",
		// 	settings_item_animType_swingCCW : "逆时针摆动",
		// 	settings_item_innerShadow : "内阴影",

		// 	border_none : '无',
		// 	border_solid : '实线',
		// 	border_dashed : '折线',
		// 	border_double : '双实线',
		// 	border_dotted : '虚线',
		// 	border_groove : '3D凹槽',
		// 	border_inset : '3D凹边',
		// 	border_outset : '3D凸边',
		// 	border_ridge : '菱形边',
		// 	settings_title_bdrAttribute : '圆角',
		// 	settings_item_leftTop : '左上圆角',
		// 	settings_item_leftBottom : '左下圆角',
		// 	settings_item_rightBottom : '右下圆角',
		// 	settings_item_rightTop : '右上圆角',
		// 	fileSystem_newFolder : "创建目录",
		// 	fileSystem_saveAs : "另存为",
		// 	fileSystem_notice_restore : "正在恢复上次打开文件",

		// 	text_shapebar_chooseImageColor : '请选择图形颜色',
		// 	text_shapebar_confirm : 'Confirm',
		// 	text_shapebar_fontSize : "笔粗",
		// 	textbar_paragraph : "段落",
		// 	textbar_title : "标题",
		// 	textbar_text : "正文",
		// 	textbar_pre : "pre",
		// 	textbar_fontSize : "字体大小",
		// 	textbar_fontFamily : "选择字体",
		// 	textbar_ff_song : "Noto Sans KR",
		// 	textbar_ff_yahei : "雅黑",
		// 	textbar_ff_blackbody : "Noto Serif KR",
		// 	textbar_foreColor : "请选择文字颜色",
		// 	textbar_hiliteColor : "请选择文字背景颜色",
		// 	textbar_fontColor : '改变字体颜色',
		// 	textbar_fontBGColor : '改变字体背景颜色',
		// 	textbar_selParagraph : '段落格式',
		// 	textbar_justifyLeft : '左对齐',
		// 	textbar_justifyCenter : '居中对齐',
		// 	textbar_justifyRight : '右对齐',
		// 	textbar_italic : '斜体',
		// 	textbar_bold : '粗体',
		// 	textbar_underline : '下划线',
		// 	textbar_strikeThrough : '删除线',
		// 	textbar_removeFormat : '擦除格式',
		// 	textbar_link : 'Add a Link',
		// 	textbar_undo : '撤销',
		// 	textbar_redo : '重做',
		// 	textbar_insertOrderedList : '有序列表',
		// 	textbar_insertUnorderedList : '无序列表',
		// 	textbar_indent : '缩进',
		// 	textbar_outdent : '减少缩进',

		// 	notice_presentationType : "幻灯片的播放类型/左键点击修改",
		// 	notice_frameTransition : "幻灯片的过渡动画/左键点击修改",
		// 	notice_beforeClose : "要离开正在编辑的内容？",
		// 	notice_openMenu : "右键打开操作菜单",
		// 	notice_confirm : '保存编辑',
		// 	browser_LieBao : '猎豹浏览器极速模式',
		// 	browser_chrome : '谷歌chrome浏览器',
		// 	browser_360 : '360 极速浏览器',
		// 	browser_notice : '请使用最新版本的chrome系列极速浏览器',
		// 	//buttons
		// 	btn_close : '关闭'
		// },
		'en' : {
			//tool bar
			toolBar_save 			: "Save File",
			toolBar_import 			: "Import File",
			toolBar_openFileSystem 	: "Open Storage Filesystem",
			toolBar_preview 		: "Preview Current Presentation",
			toolBar_setAnimation 	: "Set Frame Transition Animation",
			toolBar_addVideo 		: "Add a Video/Audio",
			toolBar_addImage 		: "Add an Image",
			toolBar_addText 		: "Add a Text-Box",
			toolBar_addCode 		: "Add a High-Contrast Code Editor",
			toolBar_changeScale 	: "Change Current Presentation Screen Size",
			toolBar_help 			: 'Intro-Helping',
			toolBar_mapEditing 		: "Drag and Drop to Edit Frame Position",
			// animation
			anim_slider 			: "Slider",
			anim_sliderZoom 		: "Slider Zoom",
			anim_rotateLeft 		: "Rotate Left",
			anim_rotateRight 		: "Rotate Right",
			anim_reverse 			: "Reverse",
			anim_label				: "Transition",
			// shape bar
			shape_triangle : "Insert Triangle",
			shape_circular : "Insert Circle Shape",
			shape_rectangle : "Insert Filled Square Shape",
			shape_rectangle_stroke : "Insert Stroke Square Shape",
			shape_round_rectangle_stroke : "Insert Stroke Square Round Shape",
			shape_heart : "insert heart shape",
			shape_star : "insert star shape",
			shape_message : "insert message shape",
			shape_moon : "insert moon shape",
			shape_polygon : "insert polygon shape",
			shape_doodle : "Draw Custom Doodle",
			//canvas menu
			canvasMenu_delete : "삭제",
			canvasMenu_copy : "복사",
			canvasMenu_cut : "잘라내기",
			canvasMenu_paste : "붙이기",
			canvasMenu_layerForward : '앞으로',
			canvasMenu_layerBackward : '뒤로',
			canvasMenu_layerFont : '글자 위로',
			canvasMenu_layerBack : '맨 뒤로',
			canvasMenu_background : '배경사진',
			canvasMenu_settings : '세팅',
			canvasMenu_programLanguage : 'program languages',
			canvasMenu_theme : 'theme',


			viewMenu_create : '맨 아래 추가',
			viewMenu_insert : '위로 추가',
			viewMenu_delete : '삭제',
			viewMenu_copy : '복사',
			viewMenu_paste : '붙여넣기',
			settings_background : "Background",
			settings_border : "Border",
			settings_shadow : "Shadow",
			settings_transform : "Transform",
			settings_title_bgColor : 'Background Color',
			settings_title_bgAttribute : 'Background Attributes',
			settings_title_borderAttribute : 'Border',
			settings_title_boxShadowColor : 'BoxShadow Color',
			settings_title_boxShadowAttr : 'BoxShadow Width',
			settings_title_rotate : 'Rotate',
			settings_title_animation : 'Animation',

			settings_item_red : 'Red',
			settings_item_green : 'Green',
			settings_item_blue : 'Blue',
			settings_item_bgColor : 'Enable Background Color',
			settings_item_opacity : 'Opacity',
			settings_item_fontSize : 'Font Size',
			settings_item_borderWidth : 'Width',
			settings_item_borderType : 'Type',
			settings_item_angle : "Angle",
			settings_item_animType : "Type",
			settings_item_innerShadow : "Inner Shadow",

			settings_item_animType_none : "None",
			settings_item_animType_rotation : "Rotation",
			settings_item_animType_zoom : "Zoom",
			settings_item_animType_reverseLR : "Reverse left and right",
			settings_item_animType_reverseTB : "Reverse up and down",
			settings_item_animType_moveTB : "Move up and down",
			settings_item_animType_moveLR : "Move left and right",
			settings_item_animType_roundCCW : "Round CCW",
			settings_item_animType_roundCW : "Round CW",
			settings_item_animType_swingCW : "Swing CW",
			settings_item_animType_swingCCW : "Swing CCW",

			border_none : 'none',
			border_solid : 'solid',
			border_dashed : 'dashed',
			border_double : 'double',
			border_dotted : 'dotted',
			border_groove : 'groove',
			border_inset : 'inset',
			border_outset : 'outset',
			border_ridge : 'ridge',
			settings_title_bdrAttribute : 'Border Radius',
			settings_item_leftTop : 'Left Top',
			settings_item_leftBottom : 'Left Bottom',
			settings_item_rightBottom : 'Right Bottom',
			settings_item_rightTop : 'Right Top',
			fileSystem_newFolder : "New Folder",
			fileSystem_saveAs : "Save As",
			fileSystem_notice_restore : "Loading File, Please Wait",

			text_shapebar_chooseImageColor : 'Please Choose filling color',
			text_shapebar_confirm : "OK",
			text_shapebar_fontSize : "Font size",
			textbar_paragraph : "Paragraph",
			textbar_title : "H ",
			textbar_text : "Text",
			textbar_pre : "Pre",
			textbar_fontSize : "Font Size",
			textbar_fontFamily : "Choose Font",
			textbar_ff_song : "Noto Sans KR",
			textbar_ff_yahei : "Yahei",
			textbar_ff_blackbody : "Noto Serif KR",
			textbar_foreColor : "Please Choose text-color",
			textbar_hiliteColor : "Please select font bg-Color",
			textbar_fontColor : 'Change font color',
			textbar_fontBGColor : 'Change font background color',
			textbar_selParagraph : 'Set paragraph format',
			textbar_justifyLeft : 'Text justify left',
			textbar_justifyCenter : 'Text justify center',
			textbar_justifyRight : 'Text justify right',
			textbar_italic : 'Set font italic ',
			textbar_bold : 'Set font blod',
			textbar_underline : 'Set font underline',
			textbar_strikeThrough : 'Set font strike through',
			textbar_removeFormat : 'Remove text format',
			textbar_link : 'Add link',
			textbar_undo : 'undo',
			textbar_redo : 'redo',
			textbar_insertOrderedList : 'insert ordered list',
			textbar_insertUnorderedList : 'insert unordered list',
			textbar_indent : 'Paragraph indent',
			textbar_outdent : 'Paragraph outdent',

			notice_presentationType : "Presentation type and click left-button to modify",
			notice_frameTransition : "Presentation frame transition and click left-button to modify",
			notice_beforeClose : "Editing ! Are you sure to leave ?",
			notice_openMenu : "Click right-button to open operate menu",
			notice_confirm : 'Save edits',
			browser_LieBao : 'LieBao browser',
			browser_chrome : 'chrome browser',
			browser_360 : '360 chrome browser',
			browser_notice : 'Please use chrome browser for you best experience ',

			//buttons
			btn_close : 'Close'
		}
	}
}