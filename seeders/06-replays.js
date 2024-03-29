module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'replays',
      [
        {
          avatar: '/img/SpeakerImages/Denis.png',
          title: 'Intro to the HPE Ezmeral Container Platform REST API',
          desc: 'Calling all developers, data analysts and IT architects. Learn how to interact with the HPE Ezmeral Container Platform programmatically through its REST API. In this hands-on workshop, you\'ll learn how to perform authentication, deploy distributed multi-mode applications for AI/ML and data analytics and interpret/respond to REST API calls. We\'ll walk you through, step by step, and, by the end of the session, you\'ll be deploying a TensorFlow application framework and other simple applications. No previous programming experience required.',
          presenter: 'Denis Choukroun',
          role: 'Cloud Solution Architect',
          videoLink: 'https://vimeo.com/445302013',
          id: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/chris-hpecp.jpg',
          title: 'Automate Apps With the HPE Container Platform',
          desc: 'IT administrators are frequently challenged to stand up hardware and software environments. These requests can be time-consuming and confusing for non-technical teams to deploy. By implementing the HPE Ezmeral Container Platform with its easy-to-use APIs, new clusters and software applications can be created automatically with specified resources. Join this hands-on workshop to learn how the HPE Ezmeral Container Platform APIs make it easier to configure apps and compute resources, along with how to pull detailed usage reports for chargeback/showback.',
          presenter: 'Chris Crawford',
          role: 'Solutions Architect',
          videoLink: 'https://vimeo.com/445267000',
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/michael.jpeg',
          title: 'Using the CSI with HPE Ezmeral Container Platform',
          desc: 'This hands-on workshop explores the fundamentals of persistent storage in Kubernetes from an end-user perspective. Learn how to create persistent volume claims (PVC), snapshots and clones, resize volumes, attach raw block volumes and understand the properties of StorageClass objects and working with PVC annotations to tweak behavior of the underlying storage to optimize performance for different workload types. Prior Kubernetes knowledge is helpful, but not necessary as the instructor will walk through different examples during the session.',
          presenter: 'Michael Mattsson',
          role: 'Principal Tech Marketing Engineer',
          videoLink: 'https://vimeo.com/436874235',
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/sandeep.jpeg',
          title: 'Deploying End-to-End Machine Learning Workflows',
          desc: 'Join this hands-on workshop and learn some fundamentals of the HPE Ezmeral Container Platform’s ability to manage, deploy and work with models in a notebook oriented around machine learning, model development and management. You will understand how to securely deploy and update your models in a containerized workload using data in the global data fabric and applications loaded on the HPE Ezmeral Container Platform.',
          presenter: 'Sandeep Deshmukh',
          role: 'Product Manager',
          videoLink: 'https://vimeo.com/445001242',
          id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/madhu_wali.jpg',
          title: 'SPIFFE and SPIRE Fundamentals',
          desc: 'Inspired by production infrastructure at Facebook, Google, Netflix and more, SPIFFE is a set of open-source standards for securely authenticating software services in dynamic and heterogeneous environments through the use of platform-agnostic, cryptographic identities. SPIRE is an open-source system that implements the SPIFFE specification in a wide variety of environments. This workshop covers SPIFFE fundamentals and provides a walk-through of installing components that make up a SPIRE deployment and demonstrates its functionality in action.',
          presenter: 'Madhukesh Wali',
          role: 'Solution Architect',
          videoLink: 'https://vimeo.com/445001005',
          id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/madhu_wali.jpg',
          title: 'Enabling PKI-Based Database Authentication With SPIRE',
          desc: 'This workshop will showcase how you can use SPIRE-issued identities (specialized X.509 certificates based on SPIFFE) to directly authenticate to databases using their standard, built-in PKI authentication. This approach does not rely on hardcoded passwords or secrets in general. Instead, short-lived asymmetric keys encrypt all traffic to the database, so it\'s secure even if your network is compromised.',
          presenter: 'Madhukesh Wali',
          role: 'Solution Architect',
          videoLink: 'https://vimeo.com/445001105',
          id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/madhu_wali.jpg',
          title: 'Strengthening Envoy Authentication With SPIRE',
          desc: 'Envoy is a popular open-source service proxy. SPIRE provides a system for establishing trust between software services, without necessarily using secrets or network-based security controls. In this workshop, you learn how to use SPIRE with Envoy to provide secure, authenticated mTLS connectivity between services with frequently rotated X.509 certificates and keys.',
          presenter: 'Madhukesh Wali',
          role: 'Solution Architect',
          videoLink: 'https://vimeo.com/445001183',
          id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/Didier.png',
          title: 'Hack Shack Challenges: Are You Ready to Compete?',
          desc: 'Feeling competitive? Show off your coding chops in any of our four challenges to compete for cool prizes. Attend this summary session to learn how to register for the challenges. We’ll explain each one, go over the rules and walk you through the environment you’ll be working in. You’ll have four hours in which to complete each challenge. Never tried any of our challenges before and wonder if it’s for you? Join us on our Slack channel (https://hpedev.slack.com/archives/C015CLE2QTT) so you can reach out to us with any questions.',
          presenter: 'Didier Lalli',
          role: 'Distinguished Technologist',
          videoLink: 'https://vimeo.com/434425665',
          id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/vincent.jpeg',
          title: 'Introduction to the HPE OneView REST API',
          desc: 'Get some practical experience with the HPE OneView REST API. Learn how to talk to an HPE OneView appliance by building a request in PowerShell, Python or even implementing a raw request with curl. In this hands-on workshop, we’ll teach you how to write your own \'infrastructure-as-code\', step by step, in an interactive way. You’ll learn how to gather information from HPE OneView and even how to perform configuration tasks, such as provisioning a new server.',
          presenter: 'Vincent Berger',
          role: 'Solutions Architect',
          videoLink: 'https://vimeo.com/445000851',
          id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/Didier.png',
          title: 'API 101, API Basics and the Value They Provide',
          desc: 'You may know that application programming interfaces (APIs) allow applications to talk to other apps, but have you ever used them? Today, APIs are available for most products and solutions. You can take advantage of them when writing automation scripts, integrating code or defining infrastructure-as-code, as long as you understand the mechanisms used to consume an API. In this hands-on workshop, we\'ll review all the jargon and technology used by REST APIs and show you how to place your first API call against a publicly available API.',
          presenter: 'Didier Lalli',
          role: 'Distinguished Technologist',
          videoLink: 'https://vimeo.com/445266623',
          id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/Francois.png',
          title: 'Redfish API Use With PowerShell Python and Bash/cURL',
          desc: 'DMTF\'s Redfish is a standard designed to deliver simple and secure management for converged, hybrid IT and the Software-Defined Data Center (SDDC). Today it is rapidly replacing proprietary protocols. In this hands-on workshop, you\'ll get to explore the Redfish tree of an OpenBMC and HPE iLO 5 to understand its basic structure, and learn how to modify resources and perform simple actions. You\'ll interact with the HTTP/JSON-based standard using your favorite language, whether it\'s PowerShell, Python or Bash/cURL. Beginners and experts welcome.',
          presenter: 'Francois Donze',
          role: 'Technical Consultant',
          videoLink: 'https://vimeo.com/445266806',
          id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/joe-aruba.jpg',
          title: 'Use Aruba API Yourself',
          desc: 'Get your automation game on with Aruba APIs in this Hands-on Lab session covering Aruba\'s wired and wireless portfolio. In this workshop, you\'ll learn to manage, configure and automate Aruba products using their REST APIs, and move away from slow and error-prone CLI (command line interface) work. We\'re offering a collection of labs tailored to varying skill levels, from coding new-comers to hardcore Pythonistas and everyone in-between. No experience required.',
          presenter: 'Joe Neville',
          role: 'Strategist',
          videoLink: 'https://vimeo.com/445266722',
          id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/hana.jpg',
          title: 'AI 101, Convolutional Neural Network (CNN) for MNIST',
          desc: 'Whether its facial recognition or self-driving cars, CNNs are used everywhere. Join this hands-on workshop to learn how to implement a simple CNN for a Modified National Institute of Standards and Technology database (MNIST). Using an MNIST dataset (70,000 pictures of hand-written digits) you\'ll learn how to build a simple CNN and train it to solve a real problem with Keras (a deep learning library for Python.) On completion, you\'ll be able to predict a digit, given a picture of hand-written digits with 99% accuracy.',
          presenter: 'Hana Malha',
          role: 'Machine Learning Engineer',
          videoLink: 'https://vimeo.com/445266905',
          id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/ron.jpg',
          title: 'Simple Automation Script With HPE SimpliVity REST API',
          desc: 'HPE SimpliVity HCI (hyperconverged infrastructure) helps to simplify complexity and to reduce your data center footprint. In this hands-on workshop, we’ll show you how to automate business processes by combining the HPE SimpliVity REST API with other tools. We’ll introduce you to several available modules, including PowerShell, Python, Go, Ansible, Terraform and more. We’ll even walk through some examples of HPE SimpliVity and VMware using Jupyter Notebooks. No previous programming experience required.',
          presenter: 'Ron Dharma',
          role: 'Principal Tech Marketing Engineer',
          videoLink: 'https://vimeo.com/436858869',
          id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/pramod.png',
          title: 'Streamline app development with open source Grommet',
          desc: 'Ever wanted to develop your own app in a easy way? Come and join us at this 101 Session on grommet, an open source project led by HPE. Grommet is a react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package. This session will allow you to discover the basics and deploy your first app on Netifly!',
          presenter: 'Pramod Sareddy',
          role: 'Fullstack Developer',
          videoLink: 'https://vimeo.com/461431097',
          id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/Didier.png',
          title: 'Introduction to Python programming',
          desc: 'Are you interested in learning more about Python, the high-level, general-purpose programming language? This basic 101-level course will get you started. Begin with a simple Hello World example and move to loops, dict and tuples concepts. Learn to use Python language constructs and an object-oriented approach to write clear, logical code for small and large-scale projects.',
          presenter: 'Samarth Deyagond & Didier Lalli',
          role: 'Distinguished Technologist',
          videoLink: 'https://vimeo.com/472124807',
          id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Introduction to Rust programming',
          desc: 'Hundreds of companies around the world are using Rust in production today for fast, low-resource, cross-platform solutions. Software you know and love, like Firefox, Dropbox, and Cloudflare, uses Rust. From startups to large corporations, from embedded devices to scalable web services, Rust is a great fit. In this session we will introduce the audience to Rust programming. A language empowering everyone to build reliable and efficient software.',
          presenter: 'Jonathan Parris & Thomas Malachi',
          role: 'Fullstack Developer',
          videoLink: 'https://vimeo.com/472125189',
          id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/Didier.png',
          title: 'Git101 - Getting involved in the open source community',
          desc: 'Git, the most widely-used version control system, and its associated web-based repositories, Github and Gitlab, are critical elements of today’s DevOps practices. If you want to be an open source developer, being able to navigate your way through the Git command set is a must. In this hands-on workshop, we’ll review some of the most common use cases. You’ll create your own Github account and begin using it to collaborate with others. You’ll learn to access material from other members, contribute to projects, and even create your own project.',
          presenter: 'Didier Lalli',
          role: 'Distinguished Technologist',
          videoLink: 'https://vimeo.com/480875742',
          id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/Denis.png',
          title: 'Building a dynamic Machine Learning pipeline with KubeDirector​',
          desc: 'Looking for a quick introduction to Machine Learning pipeline with open source application called KubeDirector? Take this free hands-on workshop to learn the steps to create an end-to-end machine learning (ML) pipeline, from data preparation to model deployment through model training and registry. You will discover how the key use of KubeDirector and its capabilities enable a dynamic ML pipeline on a CNCF-certified Kubernetes cluster managed by HPE Ezmeral Container Platform.',
          presenter: 'Denis Choukroun',
          role: 'Cloud Solution Architect',
          videoLink: 'https://vimeo.com/502117137',
          id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/Francois.png',
          title: 'HPE iLOrest Overview',
          desc: 'The HPE RESTful Interface Tool (iLOrest) is a powerful command-line Redfish client that allows you to manage Hewlett Packard Enterprise iLO 4 and iLO 5 based servers. After a brief description of the tool capabilities, you will be able to perform several simple and complex management operations against an iLO 5 Redfish simulator. In addition, this workshop introduces the concept of resource data types and methodologies to get or set resources using the API Reference document. Lastly it explains how to use the debug mode to troubleshoot your Bash, Python or PowerShell scripts.',
          presenter: 'Francois Donze',
          role: 'Technical Consultant',
          videoLink: 'https://vimeo.com/504494928',
          id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/DungHoangKhac.png',
          title: 'HPE OneView - PowerShell Advanced Scripting',
          desc: 'Time to go further with HPE OneView. In this workshop, you will explore some advanced features of the HPE OneView PowerShell library as well as techniques to automate HPE OneView deployments using Windows PowerShell and the HPE OneView PowerShell library (POSH). Learn how to query HPE OneView to collect information about resources, how to update existing resources or create new resources, and how to write a simple PowerShell script to automate HPE OneView configurations.',
          presenter: 'Dung Hoang Khac',
          role: 'North America Service Enablement',
          videoLink: 'https://vimeo.com/508802530',
          id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/rickkauffmann.jpg',
          title: 'StackStorm 101 - Introduction to the StackStorm Framework',
          desc: 'StackStorm is a platform for integration and automation across services and tools. It ties together your existing infrastructure and application environment so you can more easily automate that environment. It has a particular focus on taking actions in response to events. Join this workshop to discover the main concepts that makes StackStorm so appealing.',
          presenter: 'Rick A Kauffman',
          role: 'Enterprise Architect',
          videoLink: 'https://vimeo.com/522105252',
          id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/yann_allandit.jpg',
          title: 'Managing HPE Cloud Volumes through API Calls',
          desc: 'An API allows a programmatic way to manage a remote software or service. In this workshop, you will learn how to manage HPE Cloud Volumes using its Application Programming Interface. From getting connection tokens to list replication stores, replica volumes, and block volumes to creating new block volumes, you will go through many examples allowing you to interact programmatically with HPE Cloud Volumes to attach, detach, and  delete block volumes.',
          presenter: 'Yann Allandit',
          role: 'Customer Architect @Oracle Cloud',
          videoLink: 'https://vimeo.com/498286520',
          id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/hpe-dev-logo.svg',
          title: 'Using the iLO Redfish API with Ansible and OneView',
          desc: 'HPE Oneview is the preferred tool for monitoring, managing and configuring Synergy compute nodes in a secure way. However, you may have to view or modify specific compute parameters directly from the iLO using the iLO GUI or the Redfish API. This workshop explains how to leverage the OneView Single Sign On (SSO) feature to provide a Redfish connection to Ansible playbooks without exposing iLO credentials. Besides, Discover new ways of writing Redfish Ansible playbooks using built-in modules, DMTF or HPE examples.',
          presenter: 'HPE DEV TEAM',
          role: 'Developer',
          videoLink: 'https://vimeo.com/531345831',
          id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          avatar: '/img/SpeakerImages/hpe-dev-logo.svg',
          title: 'Kubernetes 101 - Introduction to the Kubernetes Concepts',
          desc: 'This tutorial provides a walkthrough of the basics of the Kubernetes cluster orchestration system. Each module contains some background information on major Kubernetes features and concepts, and includes an interactive online tutorial. These interactive tutorials let you manage a simple cluster (managed by HPE Ezmeral Container Platform) and its containerized applications. In action, you will deploy a containerized application on a cluster, scale its deployment, update the application and debug it.',
          presenter: 'HPE DEV TEAM',
          role: 'Developer',
          videoLink: 'https://vimeo.com/531364481',
          id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        returning: true,
      }
    ),

  down: (queryInterface) => queryInterface.bulkDelete('replays', null, {}),
};
