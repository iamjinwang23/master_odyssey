/* Data Store based on document */
const scheduleData = {
  day1: {
    bannerImg: "./img/day1-banner.jpg",
    title: "Day 1: 교토 입성 & 환영 만찬",
    tip: "첫날 숙소 체크인 후 바로 대욕장(온천장)에서 비행 피로를 풀어주세요! 스키야키를 드신 후 가모강변 산책은 수면의 질을 높여줍니다.",
    runner: [
      { time: "05:30", type: "transport", title: "인천공항 집합 및 출국", desc: "05:30 집합 필수. 티웨이항공 탑승 (08:00 출발 - 10:05 도착)" },
      { time: "12:00", type: "food", title: "현지식 점심 식사", desc: "교토 도심 도착 후 교토 정식으로 가벼운 점심 식사 (45인승 대형버스 이동)" },
      { time: "14:00", type: "hotel", title: "프리미엄 숙박 체크인", desc: "온야도 노노 교토 시치조. 짐 이동 없는 전관 다다미 3연박 셋업" },
      { time: "16:00", type: "relax", title: "대욕장 리커버리", desc: "호텔 내 천연 온천(연화의 탕)에서 비행 피로 회복" },
      { time: "17:30", type: "event", title: "오마스터 특별 환영 만찬", desc: "고급 스키야키 코스로 단백질 충전", img: "./img/day1-dinner.jpg" },
      { time: "19:00", type: "tour", title: "가모강변 (시치조 대교) 산책", desc: "취침 전 명쾌한 수면을 위한 가벼운 산책" }
    ],
    family: [
      { time: "05:30", type: "transport", title: "인천공항 집합 및 출국", desc: "05:30 집합 필수. 티웨이항공 탑승 (08:00 출발 - 10:05 도착)" },
      { time: "12:00", type: "food", title: "현지식 점심 식사", desc: "교토 도심 도착 후 교토 정식으로 점심 식사" },
      { time: "14:00", type: "hotel", title: "프리미엄 숙박 체크인", desc: "온야도 노노 교토 시치조. 짐 풀고 바로 쉴 수 있는 편안함" },
      { time: "16:00", type: "relax", title: "천연 온천에서의 휴식", desc: "호텔 내 천연 온천 대욕창에서 진정한 휴식" },
      { time: "17:30", type: "event", title: "선수단과 함께 환영 만찬", desc: "다같이 어울리는 스키야키 특식", img: "./img/day1-dinner.jpg" },
      { time: "19:00", type: "tour", title: "가모강변 야경 산책", desc: "잊지 못할 교토 첫날밤의 낭만적인 산책" }
    ]
  },
  day2: {
    bannerImg: "./img/day2-banner.jpg",
    title: "Day 2: 엑스포 & 자유 관광",
    tip: "(선수) 많은 걷기를 피하고 다리를 올려두세요. (가족) USJ 익스프레스 패스를 챙겼는지 아침에 꼭 확인해주세요!",
    runner: [
      { time: "07:00", type: "sport", title: "모닝 런 워밍업", desc: "가모강변에서 오영환 마스터 주관 5~8km 모닝 조깅 (자율 참여)", img: "./img/day2-runner-morning.jpg" },
      { time: "08:30", type: "food", title: "든든한 조식", desc: "해산물과 단백질 위주의 뷔페 식사" },
      { time: "10:00", type: "event", title: "교토 마라톤 엑스포 방문", desc: "배번표 수령 및 공식 굿즈 쇼핑" },
      { time: "12:00", type: "food", title: "카보로딩 점심 식사", desc: "소화 잘되는 우동이나 덮밥류 섭취" },
      { time: "13:30", type: "tour", title: "액티브 리커버리 산책", desc: "니시키 시장 내 평지 위주 가벼운 걷기" },
      { time: "15:30", type: "relax", title: "체력 비축 및 이미지 트레이닝", desc: "객실 휴식 (다리 올리기, 스트레칭)" }
    ],
    family: [
      { time: "07:30", type: "food", title: "조식 후 이동", desc: "맑은 날엔 유니버셜 스튜디오 재팬(USJ), 비오는 날엔 아라시야마 등 선택 플랜에 따라 이동" },
      { time: "08:30", type: "event", title: "[맑음] 오사카 유니버셜 스튜디오 재팬(USJ) 완전 정복", desc: "(플랜A) 익스프레스 패스로 슈퍼 닌텐도 월드, 해리포터 체험", img: "./img/day2-family-usj.jpg" },
      { time: "10:00", type: "tour", title: "[우천] 전통 운치 투어", desc: "(플랜B) 비 내리는 텐류지 정원 산책과 말차 다도 체험" },
      { time: "18:00", type: "food", title: "저녁 식사 후 복귀", desc: "맑은날은 오코노미야키, 비오는날은 교토 특식!" }
    ]
  },
  day3: {
    bannerImg: "./img/day3-banner.jpg",
    title: "Day 3: 마라톤 & 완주 축하",
    tip: "선수와 가족 모두 저녁 만찬에서 성취감을 나눕니다. 응원에 사용할 현수막이나 타월을 지참하세요!",
    runner: [
      { time: "05:30", type: "food", title: "기상 및 간편 조식", desc: "도시락, 에너지바로 식사 후 레이스 복장 환복" },
      { time: "07:00", type: "transport", title: "대회장으로 이동", desc: "마라톤 스타트 구역 집합 및 워밍업" },
      { time: "09:00", type: "sport", title: "🏃 교토 마라톤 레이스!", desc: "오마스터의 페이스메이킹 동행. 전원 완주 목표!", img: "./img/day3-runner-race.jpg" },
      { time: "15:30", type: "relax", title: "대욕장 리커버리 (냉온욕)", desc: "호텔로 돌아와 30분 이상 냉온욕 근육 회복" },
      { time: "18:00", type: "event", title: "🏅 완주 축하 만찬 (야키니쿠)", desc: "가족과 함께 만나 축하 파티 및 영양 보충" }
    ],
    family: [
      { time: "10:00", type: "tour", title: "교토 핵심 관광", desc: "청수사(기요미즈데라) & 여우신사 그리고 카페 투어" },
      { time: "14:00", type: "event", title: "🎉 피니시 라인 응원", desc: "헤이안진구 앞 도착장에서 선수들의 감동 완주 환영!", img: "./img/day3-family-cheer.jpg" },
      { time: "16:00", type: "relax", title: "선수단 합류 및 휴식", desc: "호텔 복귀 후 가족들의 피로도 냉온욕으로 풀어주세요." },
      { time: "18:00", type: "food", title: "가족 모두의 완주 파티!", desc: "최고의 성취를 축하하는 야키니쿠 고기 파티" }
    ]
  },
  day4: {
    bannerImg: "./img/day4-banner.jpg",
    title: "Day 4: 오사카 관광 & 귀환",
    tip: "15:00 정각에 공항버스가 떠납니다! 오사카 도톤보리 관광 시 시간에 늦지 않도록 반드시 주의해주세요.",
    runner: [
      { time: "08:00", type: "relax", title: "늦잠 및 조식", desc: "충분히 자고 일어나 체크아웃 준비. 짐 버스 적재" },
      { time: "11:00", type: "tour", title: "오사카 자유 관광 및 쇼핑", desc: "도톤보리, 글리코상, 돈키호테 자유 여행 (중식 자유)" },
      { time: "15:00", type: "transport", title: "공항으로 출발 (시간 엄수)", desc: "15:00 정각 출발. 늦을 경우 개인 귀책!" },
      { time: "18:00", type: "transport", title: "귀국 비행기 탑승", desc: "18:00 탑승구 집합. 간사이(KIX)에서 인천(ICN)으로 복귀" }
    ],
    family: [
      { time: "08:00", type: "relax", title: "늦잠 및 조식", desc: "충분한 휴식 후 짐 챙기기. 짐은 버스 트렁크에 바로 보관" },
      { time: "11:00", type: "tour", title: "도톤보리/신사이바시 쇼핑", desc: "가족 선물과 기념품을 구입하는 자유 시간" },
      { time: "15:00", type: "transport", title: "공항 버스 출발 (지각 주의)", desc: "쇼핑 시간에 쫓기지 않게 14:50에는 집합해주세요." },
      { time: "18:00", type: "transport", title: "무사 귀환 탑승", desc: "선수와 가족 모두 건강하게 인천으로 비행!" }
    ]
  }
};

let currentUserType = 'runner'; // 'runner' or 'family'

document.addEventListener('DOMContentLoaded', () => {
  initIntersectionObserver();
  initGNB();
  initToggle();
  renderFullSchedule();
});

function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Expose observer globally to attach to dynamically created elements
  window.appObserver = observer;
  document.querySelectorAll('.fade-up, .fade-zoom').forEach(el => observer.observe(el));
}

function initGNB() {
  const gnb = document.getElementById('gnb');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) gnb.classList.add('scrolled');
    else gnb.classList.remove('scrolled');
  });
}

function initToggle() {
  const toggle = document.getElementById('user-type-toggle');
  toggle.addEventListener('change', (e) => {
    currentUserType = e.target.checked ? 'family' : 'runner';
    renderFullSchedule();
  });
}

// Dynamic Route Mapping
window.initMaps = function () {
  if (window.google && google.maps) {
    const routeCoords = {
      day1: [
        { lat: 34.4320, lng: 135.2303, title: "간사이 공항 도착" },
        { lat: 34.9885, lng: 135.7585, title: "온야도 노노 교토 (베이스캠프)" },
        { lat: 34.9892, lng: 135.7661, title: "가모강변 시치조대교 야경" }
      ],
      day2_runner: [
        { lat: 34.9885, lng: 135.7585, title: "베이스캠프" },
        { lat: 35.0135, lng: 135.7818, title: "마라톤 엑스포" },
        { lat: 35.0050, lng: 135.7649, title: "니시키 시장" },
        { lat: 34.9885, lng: 135.7585, title: "베이스캠프 복귀" }
      ],
      day2_family: [
        { lat: 34.9885, lng: 135.7585, title: "베이스캠프" },
        { lat: 34.6654, lng: 135.4323, title: "USJ / 텐류지 투어" },
        { lat: 34.9885, lng: 135.7585, title: "베이스캠프 복귀" }
      ],
      day3_runner: [
        { lat: 34.9885, lng: 135.7585, title: "베이스캠프" },
        { lat: 34.9937, lng: 135.7145, title: "마라톤 스타트 구역" },
        { lat: 35.0159, lng: 135.7824, title: "헤이안진구 (피니시)" },
        { lat: 34.9885, lng: 135.7585, title: "완주 파티" }
      ],
      day3_family: [
        { lat: 34.9885, lng: 135.7585, title: "베이스캠프" },
        { lat: 34.9671, lng: 135.7726, title: "후시미이나리" },
        { lat: 34.9948, lng: 135.7850, title: "청수사" },
        { lat: 35.0159, lng: 135.7824, title: "피니시 라인 응원" },
        { lat: 34.9885, lng: 135.7585, title: "완주 파티" }
      ],
      day4: [
        { lat: 34.9885, lng: 135.7585, title: "베이스캠프" },
        { lat: 34.6687, lng: 135.5012, title: "오사카 (도톤보리)" },
        { lat: 34.4320, lng: 135.2303, title: "간사이 공항 (출국)" }
      ]
    };

    const uberStyles = [
      { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] }
    ];

    Object.keys(scheduleData).forEach((dayKey) => {
      const mapEl = document.getElementById(`map-${dayKey}`);
      if (mapEl) {
        let routePathKey = dayKey;
        if (dayKey === 'day2' || dayKey === 'day3') { routePathKey = dayKey + '_' + currentUserType; }

        const pathCoords = routeCoords[routePathKey] || routeCoords['day1'];
        const bounds = new google.maps.LatLngBounds();

        const map = new google.maps.Map(mapEl, {
          disableDefaultUI: true, zoomControl: true, styles: uberStyles
        });

        const infoWindow = new google.maps.InfoWindow();
        const pathLine = [];

        pathCoords.forEach((coord, index) => {
          pathLine.push({ lat: coord.lat, lng: coord.lng });
          bounds.extend({ lat: coord.lat, lng: coord.lng });

          const marker = new google.maps.Marker({
            position: { lat: coord.lat, lng: coord.lng }, map, title: coord.title,
            label: { text: (index + 1).toString(), color: 'white', fontWeight: 'bold', fontSize: '12px' },
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 14, fillColor: '#000000', fillOpacity: 1, strokeWeight: 2, strokeColor: '#ffffff' }
          });

          const contentStr = `<div style="padding:4px 8px; font-weight:700; font-size:15px; color:#222; font-family:var(--font-main, sans-serif); text-align:center;">${coord.title}</div>`;
          marker.addListener("mouseover", () => { infoWindow.setContent(contentStr); infoWindow.open(map, marker); });
          marker.addListener("mouseout", () => { infoWindow.close(); });
          marker.addListener("click", () => { infoWindow.setContent(contentStr); infoWindow.open(map, marker); });
        });

        // Close on empty map click
        map.addListener("click", () => { infoWindow.close(); });

        new google.maps.Polyline({
          path: pathLine, geodesic: true, strokeColor: '#000000', strokeOpacity: 0.8, strokeWeight: 4, map: map
        });

        map.fitBounds(bounds);
        const listener = google.maps.event.addListener(map, "idle", function () {
          map.setZoom(map.getZoom() - 1);
          google.maps.event.removeListener(listener);
        });
      }
    });

    // Initialize Global Hotel Map
    if (document.getElementById('hotel-map')) {
      const hotelMap = new google.maps.Map(document.getElementById('hotel-map'), {
        center: { lat: 34.9885, lng: 135.7585 }, // Onyado Nono Kyoto Shichijo
        zoom: 16,
        disableDefaultUI: true, zoomControl: true
        // Removed Uber dark style, leaving default or passing a light warm maps style
      });

      const infoWindow = new google.maps.InfoWindow();

      const mainMarker = new google.maps.Marker({
        position: { lat: 34.9885, lng: 135.7585 }, map: hotelMap, title: "온야도 노노 교토 시치조 (베이스캠프)",
        icon: { path: google.maps.SymbolPath.CIRCLE, scale: 16, fillColor: '#FF385C', fillOpacity: 1, strokeWeight: 3, strokeColor: '#ffffff' }
      });
      const mainContent = `<div style="padding:4px 8px; font-weight:800; font-size:15px; color:#FF385C; font-family:var(--font-main, sans-serif); text-align:center;">🏨 온야도 노노 교토 시치조</div>`;
      mainMarker.addListener("mouseover", () => { infoWindow.setContent(mainContent); infoWindow.open(hotelMap, mainMarker); });
      mainMarker.addListener("mouseout", () => { infoWindow.close(); });
      mainMarker.addListener("click", () => { infoWindow.setContent(mainContent); infoWindow.open(hotelMap, mainMarker); });

      const spots = [
        { lat: 34.9858, lng: 135.7587, title: "교토역 (Kyoto Station)" },
        { lat: 34.9892, lng: 135.7661, title: "가모강변 시치조 대교 (조깅)" },
        { lat: 34.9904, lng: 135.7594, title: "히가시혼간지 (사찰 산책)" }
      ];
      spots.forEach(spot => {
        const marker = new google.maps.Marker({
          position: spot, map: hotelMap, title: spot.title,
          icon: { path: google.maps.SymbolPath.CIRCLE, scale: 9, fillColor: '#222222', fillOpacity: 1, strokeWeight: 1.5, strokeColor: '#ffffff' }
        });
        const popupContent = `<div style="padding:4px 8px; font-weight:600; font-size:13px; color:#222; font-family:var(--font-main, sans-serif); text-align:center;">${spot.title}</div>`;
        marker.addListener("mouseover", () => { infoWindow.setContent(popupContent); infoWindow.open(hotelMap, marker); });
        marker.addListener("mouseout", () => { infoWindow.close(); });
        marker.addListener("click", () => { infoWindow.setContent(popupContent); infoWindow.open(hotelMap, marker); });
      });

      // Close on empty map click
      hotelMap.addListener("click", () => { infoWindow.close(); });
    }
  }
};

function renderFullSchedule() {
  const container = document.getElementById('full-schedule-container');
  container.innerHTML = '';

  Object.keys(scheduleData).forEach((dayKey, dayIndex) => {
    const dayData = scheduleData[dayKey];
    const items = dayData[currentUserType];

    const daySection = document.createElement('div');
    daySection.className = 'day-section mb-12';
    daySection.style.marginBottom = '80px';

    const timelineHtml = items.map((item, index) => `
      <div class="timeline-item show" style="transition-delay: ${index * 0.1}s">
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-card">
          <div class="badge badge-${item.type} mb-2"><i class="${getBadgeIcon(item.type)}"></i> ${getTypeLabel(item.type)}</div>
          <h4 class="timeline-title">${item.title}</h4>
          <p>${item.desc}</p>
          ${item.img ? `<img src="${item.img}" alt="${item.title}" class="timeline-image">` : ''}
        </div>
      </div>
    `).join('');

    const titleParts = dayData.title.split(': ');
    const dayBadgeText = (titleParts[0] || `Day ${dayIndex + 1}`).toUpperCase();
    const mainTitle = titleParts[1] || dayData.title;

    daySection.innerHTML = `
      <div class="day-banner fade-zoom" style="background-image: url('${dayData.bannerImg}'); margin-bottom: 40px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; padding: 50px 0; text-align: left;">
        <div class="banner-overlay"></div>
        <div class="container" style="position:relative; z-index:10; width: 100%; margin: 0 auto; padding: 0 20px;">
          <div class="day-badge" style="display:inline-block; background: #ffffff; color: var(--text-main); padding: 6px 20px; border-radius: 999px; font-weight: 800; font-size: 1.1rem; margin-bottom: 16px; font-family: var(--font-eng); letter-spacing: -0.5px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">${dayBadgeText}</div>
          <h3 style="font-size:2.5rem; color:#fff; font-weight:700; line-height:1.2; text-shadow: 0 4px 10px rgba(0,0,0,0.5);">${mainTitle}</h3>
        </div>
      </div>
      
      <div class="map-container glassmorphism fade-up" style="margin-bottom: 40px;">
         <div class="map-header">
            <i class="ph ph-map-pin-line"></i> <span>${dayKey.replace('day', 'Day ')} 예약 동선</span>
         </div>
         <div id="map-${dayKey}" class="map-render-area" style="height: 100%; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
            <div style="text-align:center;">
              <i class="ph ph-circle-notch ph-spin" style="font-size:2rem; margin-bottom:10px;"></i>
              <p>Google Maps 로딩 중...</p>
            </div>
         </div>
      </div>

      <div class="timeline-area fade-up" style="max-width: 800px; margin: 0 auto;">
        <div class="timeline">
          ${timelineHtml}
        </div>
        <div class="support-box mt-4">
          <h5><i class="ph-fill ph-lightbulb"></i> 마스터의 오늘의 팁</h5>
          <p style="color: var(--text-main); font-weight: 500;">${dayData.tip}</p>
        </div>
      </div>
    `;

    container.appendChild(daySection);

    // Attempt to observe new elements for animation
    if (window.appObserver) {
      daySection.querySelectorAll('.fade-up, .fade-zoom').forEach(el => window.appObserver.observe(el));
    }
  });

  // Re-trigger maps init in case the script is already loaded
  window.initMaps();
}

function getBadgeIcon(type) {
  const map = {
    transport: 'ph-airplane-tilt',
    food: 'ph-fork-knife',
    hotel: 'ph-buildings',
    relax: 'ph-drop',
    event: 'ph-star',
    tour: 'ph-camera',
    sport: 'ph-sneaker'
  };
  return `ph ${map[type] || 'ph-info'}`;
}

function getTypeLabel(type) {
  const map = { transport: '이동', food: '식사/영양', hotel: '숙박', relax: '휴식/리커버리', event: '행사', tour: '관광', sport: '운동' };
  return map[type] || '안내';
}

function initHotelCarousel() {
  const track = document.getElementById('hotelTrack');
  if (!track) return;
  const slides = Array.from(track.querySelectorAll('.carousel-img'));
  const nextBtn = document.querySelector('.hotel-carousel-container .next-btn');
  const prevBtn = document.querySelector('.hotel-carousel-container .prev-btn');
  const dots = Array.from(document.querySelectorAll('.hotel-carousel-container .dot'));

  let currentIndex = 0;
  let autoPlayInterval;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  };

  const startAutoPlay = () => {
    autoPlayInterval = setInterval(nextSlide, 4000);
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  };

  nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
      resetAutoPlay();
    });
  });

  // Pause on hover
  const container = document.getElementById('hotelCarousel');
  container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
  container.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileMenuDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!menuBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);

  // Close drawer when clicking outside content (on the blurred overlay)
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  // Close drawer when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHotelCarousel();
  initMobileMenu();
});
