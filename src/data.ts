export const profile = {
  name: 'Sudhanshu Singh',
  location: 'Lucknow, India',
  email: 'sksrjpt@gmail.com',
  phone: '+91-8825200680',
  github: 'https://github.com/BlackManas01',
  linkedin: 'https://linkedin.com/in/sudhanshu-singh-78347a248/',
  // Illustrated avatar (swap the seed or URL anytime for your own image)
  avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Sudhanshu&backgroundColor=transparent',
  resume: '/Sudhanshu_Resume_Final.pdf',
  yearsExperience: '4+',
}

export const about =
  "I'm an automation engineer who turns slow, manual QA into fast and reliable automation. Across the last 4+ years I've built test frameworks for web, mobile and desktop apps — and when the right tooling didn't exist, I built that too, including software-emulated USB devices that removed the dependency on physical audio hardware."

export const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '60%', label: 'Less manual effort' },
  { value: '40%', label: 'Faster release cycles' },
  { value: '6+', label: 'Frameworks built' },
]

export const skillGroups = [
  {
    title: 'Testing Frameworks',
    items: ['WebdriverIO', 'Playwright', 'Appium', 'TestCafe', 'Cucumber (Gherkin)', 'pytest'],
  },
  {
    title: 'Automation Tools',
    items: ['REST Assured', 'Postman', 'MSTest', 'NUnit', 'Axios'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'],
  },
  {
    title: 'CI/CD & Cloud',
    items: ['Azure DevOps', 'GitHub', 'BrowserStack'],
  },
  {
    title: 'Testing Types',
    items: ['UI Automation', 'Mobile (Android & iOS)', 'API', 'Cross-Browser', 'Regression'],
  },
  {
    title: 'AI Expertise',
    items: ['Prompt Engineering', 'GitHub Copilot', 'Claude', 'OpenAI'],
  },
]

export const experiences = [
  {
    role: 'Automation Engineer (SDET)',
    company: 'HCLTech',
    period: 'Mar 2023 – Present',
    location: 'Lucknow, India',
    points: [
      'Lead test automation across web and mobile applications using WebdriverIO, Playwright and TestCafe, reducing manual regression effort by approximately 60%.',
      'Designed and scaled Appium test suites for Android and iOS, executing across real devices and BrowserStack’s cloud grid without a dedicated device lab.',
      'Developed a framework that validates complete call-control flows by driving both physical and software-emulated audio devices.',
      'Integrated automation into Azure DevOps pipelines for continuous regression, reducing release validation time by around 40%.',
      'Engineered reusable utilities and modular components that eliminated roughly 35% of duplicated test code across teams.',
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'HCLTech',
    period: 'Mar 2022 – Feb 2023',
    location: 'Lucknow, India',
    points: [
      'Developed responsive web interfaces using HTML, CSS and JavaScript, with hands-on exposure to React, Angular and C#/.NET.',
      'Supported the QA team across test design, defect triage and regression cycles, building a strong foundation in the SDLC.',
      'Promoted to a full-time SDET role to design and build automation frameworks from the ground up.',
    ],
  },
]

export const projects = [
  {
    title: 'Virtual USB Device Emulation',
    category: 'Desktop',
    year: '2025 – Present',
    role: 'SDET',
    image: '/projects/chip.jpg',
    summary: 'Custom Windows kernel drivers that emulate USB calling devices entirely in software.',
    tags: ['C (KMDF)', 'UDE', 'TypeScript', 'koffi FFI', 'IOCTL', 'Azure DevOps'],
    challenge:
      'Call-control automation depended on physical headsets and speakerphones plugged into the test machine. The devices were scarce, their drivers drifted, and maintaining them was a constant bottleneck — so I set out to validate the same call-control behavior without depending on real audio hardware.',
    overview:
      'I designed and built a set of custom Windows kernel-mode drivers (C / KMDF on top of the USB Device Emulation framework) that present themselves to the OS as a genuine USB composite audio + HID telephony device. The application under test sees a real headset; in reality it is entirely software. A TypeScript control layer talks to the driver over DeviceIoControl (IOCTL) through koffi FFI to press buttons, plug and unplug the device, and read its LED state programmatically. It currently targets Windows and runs on a physical machine with Secure Boot disabled and test signing enabled.',
    points: [
      'Authored Windows kernel-mode drivers (C / KMDF + UDE) that emulate a USB composite audio + HID telephony device, indistinguishable from real hardware to the app under test.',
      'Implemented the full build → test-sign → install flow (MSBuild, signtool, inf2cat, pnputil, devcon) to provision the virtual device on a prepared Windows machine.',
      'Built a TypeScript control API over DeviceIoControl (IOCTL) via koffi FFI to trigger mute / answer / hold / end / volume, simulate plug & unplug, and read back device LED states.',
      'Integrated the suite into Azure DevOps pipelines for automated execution on a physical agent.',
      'Currently Windows-only — because it needs Secure Boot disabled and test signing enabled, it runs on a physical machine rather than cloud agents.',
    ],
    outcome:
      'Removed the dependency on physical headsets and speakerphones, letting call-control scenarios run from a fully software-emulated device on a prepared Windows machine.',
  },
  {
    title: 'Calling-Device Automation Framework',
    category: 'Desktop',
    year: '2024 – 25',
    role: 'SDET',
    image: '/projects/headset.jpg?v=2',
    summary: 'Validates how a desktop calling app responds to real headsets and speakerphones.',
    tags: ['WebdriverIO', 'Mocha', 'TypeScript', 'HID SDKs', 'Azure DevOps'],
    challenge:
      'A desktop calling application had to behave perfectly with real headsets and speakerphones — mute, answer, hold, end and volume all had to stay in sync between the device and the app. Checking this by hand was slow and inconsistent.',
    overview:
      'I architected a WebdriverIO + Mocha + TypeScript framework that drives genuine vendor headsets and speakerphones through their HID SDKs, asserting that every call-control action and LED state stays in sync between the physical device and the application.',
    points: [
      'Architected a WebdriverIO + Mocha + TypeScript framework using the Page Object Model with retries, parallel execution and environment-specific configuration.',
      'Integrated multiple vendor HID SDKs to drive real headsets and speakerphones, asserting call-control actions (mute, answer, hold, end, volume) and LED synchronization.',
      'Integrated the suite with Azure DevOps pipelines for automated regression execution.',
    ],
    outcome:
      'Replaced slow, manual device checks with automated validation of real-hardware call-control behavior.',
  },
  {
    title: 'Cross-Browser Test Automation',
    category: 'Web',
    year: '2023 – 24',
    role: 'SDET',
    image: '/projects/code.jpg',
    summary: 'Playwright + Python suite running in parallel across every major browser engine.',
    tags: ['Playwright', 'Python', 'pytest', 'CI'],
    challenge:
      'A web platform had to behave identically across Chromium, Firefox and WebKit, including tricky authenticated flows and shadow-DOM components — but cross-browser regressions kept slipping through and full runs were painfully slow.',
    overview:
      'I built a Playwright + Python (pytest) suite that executes fully in parallel across all three engines, with reusable fixtures and resilient, self-healing locators that hold up against dynamic, component-heavy UIs.',
    points: [
      'Developed a Playwright + Python (pytest) suite running in parallel across Chromium, Firefox and WebKit.',
      'Automated authenticated journeys, dynamic routing and shadow-DOM interactions with reusable fixtures and robust locators.',
      'Integrated the suite into CI for fast, parallel feedback on every change.',
    ],
    outcome:
      'Caught cross-browser regressions before release and cut feedback time dramatically through full parallelization.',
  },
  {
    title: 'Mobile Automation in C#',
    category: 'Mobile',
    year: '2022 – 23',
    role: 'SDET',
    image: '/projects/phone1.jpg?v=2',
    summary: 'Appium + C#/.NET suite driving Android and iOS native apps from one codebase.',
    tags: ['Appium', 'C# / .NET', 'MSTest', 'Android', 'iOS', 'BrowserStack'],
    challenge:
      'Native apps on Android and iOS needed dependable automated coverage of gestures, deep links and session handling — without maintaining two separate, divergent codebases.',
    overview:
      'I rebuilt the mobile suite on Appium with C# and .NET, using a shared, platform-aware locator architecture so a single codebase drives both Android and iOS across real devices and BrowserStack.',
    points: [
      'Built an Appium + C#/.NET (MSTest) suite automating gestures, deep links and session handling across Android and iOS.',
      'Designed a shared, platform-aware locator layer so one codebase serves both platforms with minimal divergence.',
      'Executed across real devices and BrowserStack to validate behavior on both physical and cloud hardware.',
    ],
    outcome: 'Delivered reliable native-app coverage on both platforms from a single, maintainable codebase.',
  },
  {
    title: 'Native & Hybrid Mobile Testing',
    category: 'Mobile',
    year: '2022 – 23',
    role: 'SDET',
    image: '/projects/phone2.jpg?v=2',
    summary: 'WebdriverIO + Appium suite (TS/JS) for native & hybrid apps at device-matrix scale.',
    tags: ['WebdriverIO', 'Appium', 'TypeScript', 'JavaScript', 'Android', 'iOS', 'BrowserStack'],
    challenge:
      'The team needed to validate native and hybrid apps across a wide range of devices and OS versions, but a physical device lab was neither affordable nor scalable.',
    overview:
      'I built a WebdriverIO + Appium suite in TypeScript and JavaScript covering native and hybrid app flows, parameterized over device and OS matrices on BrowserStack so coverage scales without owning hardware.',
    points: [
      'Built a WebdriverIO + Appium suite in TypeScript/JavaScript covering native and hybrid app flows on Android and iOS.',
      'Parameterized device and OS matrices on BrowserStack to run the same suite across dozens of device / OS combinations.',
      'Handled platform-specific locator and gesture differences behind a shared abstraction.',
    ],
    outcome: 'Achieved scalable cross-device validation with zero physical device lab.',
  },
  {
    title: 'Web UI Automation with TestCafe',
    category: 'Web',
    year: '2022',
    role: 'SDET',
    image: '/projects/laptop.jpg',
    summary: 'The first framework that shaped the team’s automation patterns.',
    tags: ['TestCafe', 'JavaScript', 'Page Objects', 'Cross-Browser'],
    challenge:
      'Early in the journey, web regression was entirely manual — slow, repetitive, and a frequent source of escaped defects.',
    overview:
      'I created the team’s first web UI automation framework using TestCafe and JavaScript, establishing reusable page models and a stable selector strategy that became the blueprint for everything that followed.',
    points: [
      'Created an early TestCafe + JavaScript framework covering cross-browser regression journeys.',
      'Established reusable page objects and a stable selector strategy later adopted across the team.',
      'Reduced repetitive manual regression and laid the groundwork for the team’s automation practice.',
    ],
    outcome: 'Set the foundation and patterns that shaped every framework the team built afterwards.',
  },
]

export type Project = (typeof projects)[number]

export const awards = [
  {
    title: 'HCL ERS Spot Award',
    org: 'HCLTech',
    desc: 'Recognized for consistently dedicated efforts.',
  },
  {
    title: 'HCL ERS Champion',
    org: 'HCLTech',
    desc: 'Recognized for providing the maximum number of ideas resulting in significant value and cost savings.',
  },
  {
    title: 'Marathon Mind Award',
    org: 'HCLTech ERS',
    desc: 'Recognized for proposing ideas driving innovation with Virtual Device Simulation and GenAI.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Amity University, Noida, India',
  },
  {
    degree: 'Intermediate — PCM',
    school: 'DAV Centenary Public School, Bhawnathpur, India',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

// Words scrolled in the bottom marquee strip
export const marquee = [
  'WebdriverIO',
  'Playwright',
  'Appium',
  'TestCafe',
  'TypeScript',
  'Python',
  'Azure DevOps',
  'BrowserStack',
  'Cucumber',
  'REST Assured',
]
