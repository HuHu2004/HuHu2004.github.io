// 日常更新只需修改这个文件。保留引号、逗号和括号；文字中的英文双引号请写成 \"。
window.PROFILE = {
  name: '胡金涛', englishName: 'Jintao Hu', school: '汕头大学',
  email: '14750206858@163.com', updated: '2026-10-16',
  headline: '专注机器人与嵌入式开发。',
  intro: '我关注机器人自主导航、强化学习与嵌入式系统，喜欢把算法、硬件和软件连接起来，完成从仿真验证到设备部署的完整实践。',
  about: '围绕自主探索与智能感知，我在 ROS / Gazebo 中开展路径规划与强化学习实验，也基于 Linux、STM32、GD32 和 K230 开发嵌入式应用。我的项目经历涵盖移动机器人、车载交互系统、数字示波器与手语识别。',
  interests: [
    {title:'机器人与自主导航', text:'SLAM 建图、全局路径规划、局部避障与室内自主探索。'},
    {title:'强化学习', text:'基于 TD3，结合优先经验回放、n 步回报与 Q-Ensemble 的策略改进。'},
    {title:'嵌入式智能与感知', text:'从 MCU 底层控制到 Linux 应用，再到端侧视觉模型部署。'}
  ],
  projects: [
    {id:'01', title:'自主导航室内地形探索小车', en:'Autonomous Exploration', date:'2023.08 — 至今（简历记载）', type:'团队项目', role:'仿真环境搭建 · 算法设计 · 论文撰写', tags:['ROS / Gazebo','TD3','STM32F4 / FreeRTOS'], summary:'结合激光雷达、深度相机与强化学习，探索室内环境中的自主导航与避障。', details:['基于 Gmapping 完成 SLAM 建图，结合 A* 进行路径规划，并在 RViz 中可视化。','在 TD3 中引入优先经验回放与 n 步回报，使用稳定性加权 Q-Ensemble 改进训练。','设计成功率、碰撞率、平均回报、最小激光余量、路径效率与实际步数六项评价指标。','搭建 STM32F4 与 RTOS 底层控制系统，以及 Pygame / Gazebo 仿真环境。']},
    {id:'02', title:'基于 Linux 的智能车载硬件控制系统', en:'Embedded Linux System', date:'2024.07 — 2025.01', type:'团队项目', role:'软硬件全栈开发', tags:['IMX6ULL','LVGL','V4L2 / pthread'], summary:'在嵌入式 Linux 上集成图形界面、摄像头、测距与舵机控制，完成多外设协同。', details:['使用 LVGL 构建主菜单、拍照、测距、舵机与温湿度等功能页面。','通过 V4L2 采集图像，结合 framebuffer 完成显示与拍照存储。','基于 Linux 设备文件与 pthread 实现外设采集、控制和多线程处理。','设计 PCB 扩展板并完成系统联调；项目成果包含一项软件著作权。']},
    {id:'03', title:'基于 GD32 的简易数字示波器', en:'Portable Digital Oscilloscope', date:'2024.02 — 2024.07', type:'团队项目', role:'软硬件全栈开发', tags:['GD32','ADC / Timer','PCB'], summary:'设计双量程手持示波器，支持交直流耦合、频率与占空比测量，以及波形显示。', details:['完成差分放大、比较器测频、定时器触发 ADC 采样及基础 UI 开发。','设计约 50 倍衰减的高压输入通道与交直流耦合切换电路。','完成原理图、PCB 布局、打样焊接与调试，通过数模地隔离抑制噪声。']},
    {id:'04', title:'基于 K230 的手语识别系统', en:'On-device Sign Language Recognition', date:'2025.05 — 2025.07', type:'个人项目', role:'嵌入式 AI 开发 · 数据处理 · 模型训练', tags:['K230','视觉推理','滑动窗口投票'], summary:'采用手部检测与手势分类双模型，实现摄像头实时识别和中文语句拼接。', details:['完成数据采集、标注、预处理与模型训练，部署双模型推理流程。','通过裁剪、缩放和填充完成图像输入适配。','采用滑动窗口投票稳定识别结果，结合语句拼接逻辑减少抖动与相似手势误识别。']}
  ],
  publications: [
    {year:'2025', title:'TD3 with Prioritized Experience Replay and n-step Targets and a Stability-Weighted Q-Ensemble', authors:'J Hu, Z Yang, Y Chen, et al.', venue:'7th International Conference on Artificial Intelligence and Advanced Manufacturing (AIAM 2025) · IET', status:'EI 会议 · 待出版（据简历）', kind:'conference', link:''},
    {year:'2025', title:'Photovoltaic Power Generation Forecasting Model Based on Bayesian Optimization of CNN-BiLSTM-Time Weighted Attention', authors:'Z. Yang and J. Hu', venue:'IEEE ICDSCA 2025 · pp. 523–531', status:'EI 会议', kind:'conference', link:'https://doi.org/10.1109/ICDSCA67083.2025.11349961'},
    {year:'2025', title:'Application Research of AdaBoost Regression Prediction Based on Machine Vision for the Brightness of a Specified Distance Environment', authors:'Hu J T, Yang Z F, Yuan Z H, et al.', venue:'国际期刊 · 2025（据简历）', status:'期刊论文', kind:'journal', link:''},
    {year:'2025', title:'Optimization of Crop Planting Strategies Based on Spearman-Normal Stochastic Linear Programming', authors:'Yang Z F, Hu J T, Yang X H, et al.', venue:'国际期刊 · 2025（据简历）', status:'期刊论文', kind:'journal', link:''}
  ],
  intellectualProperty: [
    {title:'一种智能化蚊虫诱杀装置', meta:'实用新型专利 · 202422711672.5 · 2024.11.07', note:'已受理 · 第一学生发明人（据简历）'},
    {title:'智能车载硬件控制系统 V1.0', meta:'软件著作权 · 2025SR2435208 · 2025.12.18', note:'杨卓凡、胡金涛'}
  ],
  skills: [
    {title:'编程语言', text:'C / C++ / Python'},
    {title:'嵌入式开发', text:'STM32 · MSPM0 · 51 · FreeRTOS · 标准库 / HAL'},
    {title:'Linux 与端侧 AI', text:'Linux 应用与驱动基础 · 交叉编译 · YOLO · 数据处理与模型部署'},
    {title:'硬件与工具', text:'嘉立创 EDA · 二层 / 四层 PCB · Keil · STM32CubeMX · VS Code'}
  ],
  awards: [
    {year:'2025', title:'全国大学生电子设计竞赛', detail:'广东赛区三等奖 · 队长'},
    {year:'2024', title:'全国大学生电子设计竞赛', detail:'广东赛区三等奖 · 队长'},
    {year:'2024', title:'蓝桥杯 EDA 设计与开发', detail:'广东赛区二等奖'}
  ],
  certificate: '大学英语六级（CET-6）已通过'
};
