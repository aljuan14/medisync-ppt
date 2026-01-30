CHAPTER I 

INTRODUCTION 

  

Background of the Problem  

Hospital healthcare services are inherently complex, necessitating substantial capital, workforce, and technological investment. These services encompass patient admission, diagnosis, medical treatment, administration, and coordination among diverse departments and medical personnel. The hospital system depends on the active involvement of multiple stakeholders (Rahmawati & Alda Ramadhika, 2024). However, literature reviews consistently identify structural inefficiencies that impede overall hospital performance. 

First, research demonstrates that hospital coordination remains compartmentalized and insufficiently integrated, resulting in unsynchronized collaboration among medical, nursing, pharmacy, laboratory, and administrative staff. This fragmentation diminishes service effectiveness (Pagiling et al., 2025) and underscores the limitations of hospital organizational systems that depend on manual coordination and traditional hierarchical structures. 

Second, an imbalance between workload and available nursing staff results in excessive work demands and is a significant factor contributing to nurse burnout.  A systematic approach to task assignment based on each nurse's actual workload is required (Mairanda et al., 2025). The lack of systems for real-time analysis of nursing workloads and automatic assignment allocation based on individual capacity intensifies this issue. As a result, task allocation processes continue to be manual, static, and lack adaptability to dynamic field conditions. 

Third, delays in the execution of medical procedures, such as medication administration and fluid changes, are common. These delays frequently arise from reliance on human memory, manual documentation, and fragmented record-keeping systems. Such inefficiencies reduce the quality of care and may compromise patient safety. Additionally, medical instructions from physicians are frequently not systematically translated into structured and scheduled tasks within nursing workflows, which increases the risk of miscommunication and procedural delays. The persistent disconnect between clinical decision-making and operational implementation at the field level remains a significant challenge. 

A centralized system that actively and adaptively coordinates human resources and workflows, with artificial intelligence serving as the primary driver, is necessary. This system should equitably distribute workloads, mitigate medical staff fatigue, and ensure timely and accurate execution of medical procedures by leveraging data-driven decision-making and real-time adaptation to operational demands. 

Consistent with the Future Org Design theme, hospitals require a centralized system that leverages artificial intelligence to coordinate human resources and workflows. Implementing this system is anticipated to ensure equitable workload distribution, decrease burnout among medical personnel, and enhance the timeliness and accuracy of medical procedures by supporting data-driven decision-making and enabling real-time adaptation to operational requirements.  

 

Problem Statement  

Given this background, the main problems this proposal aims to address are:  

How can the hospital improve coordination so that medical, nursing, pharmacy, laboratory, and administrative staff work together smoothly and effectively?  

How can nursing staff be assigned fairly and flexibly, using real-time workload data, to avoid imbalances and prevent burnout?  

How can medical instructions and procedures become organized, scheduled tasks that are completed on time, without depending on manual records or scattered systems?  

 

CHAPTER II 
OBJECTIVES AND TARGET USERS 

 

Objectives  

This proposal seeks to develop Medisync, an artificial intelligence-powered hospital system that optimizes patient flow, staff allocation, and real-time operational and financial auditing. 

Medisync is intended to accomplish the following objectives: 

Enhance staff utilization by automatically assigning tasks according to real-time workload assessments. 

Ensure timely execution of medical procedures through intelligent scheduling and automated notifications. 

Reduce errors and prevent revenue loss by implementing automated, data-driven auditing processes. 

Providing AI chatbots to provide health information to patients, tailored to their medical records. 

 

Target Users  

The primary users of Medisync are as follows: 

Hospital management, responsible for monitoring operational efficiency and evaluating evaluate the division of tasks among hospital workers. 

Doctors, who make clinical decisions with support from artificial intelligence (AI) recommendation systems. 

Nurses, who perform medical procedures and receive structured tasks in real time. 

Patients, who benefit from transparent services and expedited response times. 

  

 

CHAPTER III 

PROPOSED SOLUTION 

Solution Overview  

Medisync functions as a central nervous system for hospitals by coordinating operational activities through artificial intelligence agents in real time and at the organizational level. The system architecture consists of two primary phases and an additional optional phase. 

Phase 1, known as Orchestrator, generates patient tickets, allocates medical staff according to workload, and maintains comprehensive records of medical procedures. 
Phase 2, referred to as Decision Support, employs artificial intelligence to provide recommendations that assist physicians in making clinical decisions. 
The optional phase incorporates a payment gateway to enhance the efficiency and automation of billing procedures. 

 

Innovation and Novelty  

Medisync's principal innovation is in its role as an organizational orchestrator, rather than functioning solely as a hospital information system. Unlike passive conventional systems, Medisync actively allocates tasks based on individual worker workloads, reroutes assignments, and performs automated audits to produce actionable recommendations. 

This methodology enables hospitals to transition from manual operations to AI-orchestrated organizations that can adapt efficiently to evolving field conditions, reducing the time required for human intervention. 

 

AI Utilization  

Medisync moves beyond standard automation by deploying a Multi-Agent System (MAS). This system comprises five distinct agents working autonomously to manage the hospital's operational and clinical data flow. 

Agent Role Assignment (Dynamic Workload Balancer) This agent functions as the system’s operational core. Instead of random or rotational assignment, it actively queries the real-time status of all on-duty staff. As demonstrated in our system logic, the agent compares active patient loads (e.g., detecting Physician TES1 has 14 active cases while Physician TES3 has only 11). Based on this variance, it automatically routes the next incoming Ticket ID to the staff member with the most available capacity. This ensures workload equilibrium and prevents the bottlenecks often caused by manual roster management. 

Agent Chatbot (Context-Aware Patient Interface) Unlike standard support bots, this agent utilizes a Retrieval-Augmented Generation (RAG) framework linked directly to the patient’s Electronic Medical Record (EMR). It filters patient inquiries through their specific medical constraints. For example, if a patient asks about dietary restrictions (e.g., consuming high-sodium or spicy foods), the agent cross-references their specific diagnosis and current medication list to provide a safe, personalized "Allowed" or "Prohibited" response, rather than a generic health tip. 

The Audit Triad (Operational Integrity Agents) Three background agents operate continuously to validate system data: 

Agent Audit Ruangan: Runs pre-admission checks to verify bed occupancy in real-time (e.g., Room 1-3 status) before a patient is assigned, preventing overbooking errors at the registration stage. 

Agent Audit Obat: Acts as a safety layer between the doctor’s input and the pharmacy. It verifies prescription data against the patient's history to flag potential contraindications. 

Agent Audit Harga: Continuously tracks all billable actions—from initial consultation to medication dispensing—to calculate an accurate running total. This eliminates manual tabulation errors at discharge. 

 

System Architecture  

The Medisync ecosystem is accessible via a Responsive Web interface for hospital staff and integrated with Telegram for real-time notifications. The architecture is explicitly structured into two primary execution phases and one optional financial phase to create a closed-loop operational cycle. 

Phase 1, the Orchestrator, serves as the operational execution layer that digitizes the patient journey from the moment of entry at the IGD or UGD. Upon registration, the system generates a unique Ticket ID that enables end-to-end history tracking. The Agent Role Assignment immediately links this ID to a specific Doctor and Nurse team, providing patients with full visibility into who is responsible for their care. Concurrent with this assignment, the system triggers the Agent Audit Ruangan to check and reserve necessary facilities, ensuring that digital assignments always match physical resource availability. 

Phase 2, Decision Support, focuses on clinical assistance designed to augment the physician's expertise. When a doctor accesses a patient's Ticket ID, the system offers optional, AI-driven insights regarding diagnosis, procedural necessity (such as recommending surgery versus conservative management), and pharmaceutical prescriptions. These recommendations are strictly supportive, analyzing symptoms and history to aid the doctor’s final decision-making process. 

Finally, the Optional Payment Gateway Phase closes the operational loop by automating the administrative discharge process. Once the Agent Audit Harga aggregates data from all previous phases to calculate the final cost, the system generates a digital invoice accessible via the patient's web interface. This enables an instant "Bayar Online" feature, allowing patients to settle their bills digitally and bypass traditional cashier queues for a significantly faster discharge experience. 

 

  

CHAPTER IV 

IMPACT AND BENEFIT ANALYSIS 

Social Impact  

Medisync may enhance healthcare workers' well-being by enabling more equitable and adaptable workload distribution, thereby reducing the risk of nurse burnout. A review of seven articles found that workload is the main cause of burnout among nurses (Mawaddah & Mandagi, 2024). 

Medisync’s automated scheduling and notification systems help medical procedures happen on time, which improves patient safety. Research shows that problems with medication management and mistakes in giving medication are major risks to patient safety (Harris et al., 2022). 

 

Economic Impact  

Implementing an automated audit system in Medisync may reduce revenue leakage caused by discrepancies across medical procedures, drug utilization, and billing processes. Industry reports suggest that the complexity and manual nature of revenue cycle management contribute to administrative errors and inaccurate documentation, which ultimately lead to lost revenue for healthcare institutions (Baxi et al., 2023). 

 

Technological and Organizational Impact  

Medisync is helping hospitals become more adaptive and sustainable by putting artificial intelligence at the center of their workflows and human resource management. This shift reflects a broader trend in healthcare, where AI is becoming a main force in shaping how organizations are designed and how work gets done.
 

CHAPTER V 

FEASIBILITY AND IMPLEMENTATION PLAN 

Technical Feasibility  

 

Scalability and Sustainability  

  

 

CHAPTER VI 

CONCLUSION 

  

 

References 

 

Baxi, S., MD, Parikh, S., Peterson, M., & Ray, A. (2023, July 25). Setting the revenue cycle up for success in automation and AI. https://www.mckinsey.com/. 

Harris, I. B., Dowell, P., & Mossburg, S. E. (2022, April 27). Annual Perspective: Topics in Medication Safety. PSNet. https://psnet.ahrq.gov/perspective/annual-perspective-topics-medication-safety 

Mairanda, N., Maryana, & Darmoris. (2025). The Relationship between the Availability of Human Resources for Nurses and Workload with the Quality of Health Services at Dr. (H.C.) Ir. Soekarno Regional Hospital, Bangka Belitung Islands Province in 2024. In JURNAL SAINTIFIK (Multi Science Journal): Vol. Vol. 23 (Issue No. 3, pp. 319–324) [Journal-article]. 

Mawaddah, D. W. H., & Mandagi, A. M. (2024). Literature Review: Factors Related to Burnout Syndrome in Hospital Nurses. Media Gizi Kesmas, 13(1), 504–511. https://doi.org/10.20473/mgk.v13i1.2024.504-511 

Pagiling, R., Mufti, M. I., & Arief, M. (2025). Implementasi Kebijakan Standar Pelayanan Kesehatan di Instalasi Gawat Darurat Rumah Sakit Umum Daerah Anutaura Palu [Journal-article]. Arus Jurnal Sosial Dan Humaniora, 4805–4812. http://jurnal.ardenjaya.com/index.php/ajsh 

Rahmawati, T. & Alda Ramadhika. (2024). Analisis sistem dan kompleksitas pelayanan rumah sakit. In Economics and Digital Business Review (Vol. 5, Issue 2, pp. 764–769). 

 