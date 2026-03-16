// ==============================
// CHRONOFORGE · LITURGIA
// Catholic Liturgical Calendar Engine
// Complete Edition - 200+ Feasts
// PREMIUM VERSION
// ==============================

// ==============================
// FIXED FEASTS - UNIVERSAL CALENDAR
// ==============================
const fixedFeasts = [
  // January
  { month: 0, day: 1, name: "Octava Nativitatis", nameEn: "Mary, Mother of God", rank: "solemnity", color: "white", obligation: true, vigil: false, octave: true },
  { month: 0, day: 2, name: "Ss. Basilii Magni et Gregorii Nazianzeni", nameEn: "Saints Basil and Gregory", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 3, name: "Ss.mi Nominis Iesu", nameEn: "Most Holy Name of Jesus", rank: "optional", color: "white", obligation: false },
  { month: 0, day: 4, name: "S. Elizabethae Seton", nameEn: "St. Elizabeth Ann Seton", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 5, name: "S. Ioannis Neumann", nameEn: "St. John Neumann", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 6, name: "Epiphania Domini", nameEn: "Epiphany", rank: "solemnity", color: "white", obligation: true, vigil: true, octave: true, transferRule: "sunday" },
  { month: 0, day: 7, name: "S. Raimundi de Peñafort", nameEn: "St. Raymond of Penyafort", rank: "optional", color: "white", obligation: false },
  { month: 0, day: 8, name: "Dominica I post Epiphaniam", nameEn: "Baptism of the Lord", rank: "feast", color: "white", obligation: false },
  { month: 0, day: 13, name: "S. Hilarii", nameEn: "St. Hilary", rank: "optional", color: "white", obligation: false },
  { month: 0, day: 17, name: "S. Antonii Abbatis", nameEn: "St. Anthony", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 20, name: "S. Fabiani et S. Sebastiani", nameEn: "Saints Fabian and Sebastian", rank: "optional", color: "red", obligation: false },
  { month: 0, day: 21, name: "S. Agnetis", nameEn: "St. Agnes", rank: "memorial", color: "red", obligation: false },
  { month: 0, day: 22, name: "S. Vincentii", nameEn: "St. Vincent", rank: "optional", color: "red", obligation: false },
  { month: 0, day: 24, name: "S. Francisci de Sales", nameEn: "St. Francis de Sales", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 25, name: "Conversio S. Pauli", nameEn: "Conversion of St. Paul", rank: "feast", color: "white", obligation: false },
  { month: 0, day: 26, name: "Ss. Timothei et Titi", nameEn: "Saints Timothy and Titus", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 27, name: "S. Ioannis Chrysostomi", nameEn: "St. John Chrysostom", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 28, name: "S. Thomae de Aquino", nameEn: "St. Thomas Aquinas", rank: "memorial", color: "white", obligation: false },
  { month: 0, day: 31, name: "S. Ioannis Bosco", nameEn: "St. John Bosco", rank: "memorial", color: "white", obligation: false },

  // February
  { month: 1, day: 2, name: "Praesentatio Domini", nameEn: "Presentation of the Lord", rank: "feast", color: "white", obligation: false, vigil: false },
  { month: 1, day: 3, name: "S. Blasii", nameEn: "St. Blaise", rank: "optional", color: "red", obligation: false },
  { month: 1, day: 5, name: "S. Agathae", nameEn: "St. Agatha", rank: "memorial", color: "red", obligation: false },
  { month: 1, day: 6, name: "Ss. Pauli Miki et Sociorum", nameEn: "Saints Paul Miki and Companions", rank: "memorial", color: "red", obligation: false },
  { month: 1, day: 8, name: "S. Hieronymi Emiliani", nameEn: "St. Jerome Emiliani", rank: "optional", color: "white", obligation: false },
  { month: 1, day: 10, name: "S. Scholasticae", nameEn: "St. Scholastica", rank: "memorial", color: "white", obligation: false },
  { month: 1, day: 11, name: "B.M.V. de Lourdes", nameEn: "Our Lady of Lourdes", rank: "optional", color: "white", obligation: false },
  { month: 1, day: 14, name: "Ss. Cyrilli et Methodii", nameEn: "Saints Cyril and Methodius", rank: "feast", color: "white", obligation: false },
  { month: 1, day: 17, name: "Ss. Septem Fundatorum", nameEn: "Seven Founders of the Servites", rank: "optional", color: "white", obligation: false },
  { month: 1, day: 21, name: "S. Petri Damiani", nameEn: "St. Peter Damian", rank: "optional", color: "white", obligation: false },
  { month: 1, day: 22, name: "Cathedra S. Petri", nameEn: "Chair of St. Peter", rank: "feast", color: "white", obligation: false },
  { month: 1, day: 23, name: "S. Polycarpi", nameEn: "St. Polycarp", rank: "memorial", color: "red", obligation: false },

  // March
  { month: 2, day: 4, name: "S. Casimiri", nameEn: "St. Casimir", rank: "optional", color: "white", obligation: false },
  { month: 2, day: 7, name: "Ss. Perpetuae et Felicitatis", nameEn: "Saints Perpetua and Felicity", rank: "memorial", color: "red", obligation: false },
  { month: 2, day: 8, name: "S. Ioannis de Deo", nameEn: "St. John of God", rank: "optional", color: "white", obligation: false },
  { month: 2, day: 9, name: "S. Franciscae Romanae", nameEn: "St. Frances of Rome", rank: "optional", color: "white", obligation: false },
  { month: 2, day: 17, name: "S. Patricii", nameEn: "St. Patrick", rank: "optional", color: "white", obligation: false },
  { month: 2, day: 18, name: "S. Cyrilli Hierosolymitani", nameEn: "St. Cyril of Jerusalem", rank: "optional", color: "white", obligation: false },
  { month: 2, day: 19, name: "S. Ioseph", nameEn: "St. Joseph", rank: "solemnity", color: "white", obligation: false, vigil: false },
  { month: 2, day: 23, name: "S. Turibii Mogrovejo", nameEn: "St. Turibius of Mogrovejo", rank: "optional", color: "white", obligation: false },
  { month: 2, day: 25, name: "Annuntiatio Domini", nameEn: "Annunciation", rank: "solemnity", color: "white", obligation: false, vigil: true },

  // April
  { month: 3, day: 2, name: "S. Francisci de Paula", nameEn: "St. Francis of Paola", rank: "optional", color: "white", obligation: false },
  { month: 3, day: 4, name: "S. Isidori", nameEn: "St. Isidore of Seville", rank: "optional", color: "white", obligation: false },
  { month: 3, day: 5, name: "S. Vincentii Ferrer", nameEn: "St. Vincent Ferrer", rank: "optional", color: "white", obligation: false },
  { month: 3, day: 7, name: "S. Ioannis Baptistae de la Salle", nameEn: "St. John Baptist de la Salle", rank: "memorial", color: "white", obligation: false },
  { month: 3, day: 11, name: "S. Stanislai", nameEn: "St. Stanislaus", rank: "optional", color: "red", obligation: false },
  { month: 3, day: 13, name: "S. Martini I", nameEn: "St. Martin I", rank: "optional", color: "red", obligation: false },
  { month: 3, day: 21, name: "S. Anselmi", nameEn: "St. Anselm", rank: "optional", color: "white", obligation: false },
  { month: 3, day: 23, name: "S. Georgii", nameEn: "St. George", rank: "optional", color: "red", obligation: false },
  { month: 3, day: 24, name: "S. Fidelis a Sigmaringa", nameEn: "St. Fidelis of Sigmaringen", rank: "optional", color: "red", obligation: false },
  { month: 3, day: 25, name: "S. Marci Evangelistae", nameEn: "St. Mark", rank: "feast", color: "red", obligation: false },
  { month: 3, day: 28, name: "S. Petri Chanel", nameEn: "St. Peter Chanel", rank: "optional", color: "red", obligation: false },
  { month: 3, day: 29, name: "S. Catharinae Senensis", nameEn: "St. Catherine of Siena", rank: "memorial", color: "white", obligation: false },
  { month: 3, day: 30, name: "S. Pii V", nameEn: "St. Pius V", rank: "optional", color: "white", obligation: false },

  // May
  { month: 4, day: 1, name: "S. Ioseph Opifex", nameEn: "St. Joseph the Worker", rank: "memorial", color: "white", obligation: false },
  { month: 4, day: 2, name: "S. Athanasii", nameEn: "St. Athanasius", rank: "memorial", color: "white", obligation: false },
  { month: 4, day: 3, name: "Ss. Philippi et Iacobi", nameEn: "Saints Philip and James", rank: "feast", color: "red", obligation: false },
  { month: 4, day: 12, name: "Ss. Nerei et Achillei", nameEn: "Saints Nereus and Achilleus", rank: "optional", color: "red", obligation: false },
  { month: 4, day: 13, name: "B.M.V. de Fatima", nameEn: "Our Lady of Fatima", rank: "optional", color: "white", obligation: false },
  { month: 4, day: 14, name: "S. Matthiae", nameEn: "St. Matthias", rank: "feast", color: "red", obligation: false },
  { month: 4, day: 18, name: "S. Ioannis I", nameEn: "St. John I", rank: "optional", color: "red", obligation: false },
  { month: 4, day: 20, name: "S. Bernardini Senensis", nameEn: "St. Bernardine of Siena", rank: "optional", color: "white", obligation: false },
  { month: 4, day: 21, name: "Ss. Christophori Magallanis et Sociorum", nameEn: "Saints Christopher Magallanes and Companions", rank: "optional", color: "red", obligation: false },
  { month: 4, day: 22, name: "S. Ritae", nameEn: "St. Rita of Cascia", rank: "optional", color: "white", obligation: false },
  { month: 4, day: 25, name: "S. Bedae Venerabilis", nameEn: "St. Bede the Venerable", rank: "optional", color: "white", obligation: false },
  { month: 4, day: 26, name: "S. Philippi Neri", nameEn: "St. Philip Neri", rank: "memorial", color: "white", obligation: false },
  { month: 4, day: 27, name: "S. Augustini Cantuariensis", nameEn: "St. Augustine of Canterbury", rank: "optional", color: "white", obligation: false },
  { month: 4, day: 31, name: "Visitatio B.M.V.", nameEn: "Visitation", rank: "feast", color: "white", obligation: false },

  // June
  { month: 5, day: 1, name: "S. Iustini", nameEn: "St. Justin", rank: "memorial", color: "red", obligation: false },
  { month: 5, day: 2, name: "Ss. Marcellini et Petri", nameEn: "Saints Marcellinus and Peter", rank: "optional", color: "red", obligation: false },
  { month: 5, day: 3, name: "Ss. Caroli Lwanga et Sociorum", nameEn: "Saints Charles Lwanga and Companions", rank: "memorial", color: "red", obligation: false },
  { month: 5, day: 5, name: "S. Bonifatii", nameEn: "St. Boniface", rank: "memorial", color: "red", obligation: false },
  { month: 5, day: 6, name: "S. Norberti", nameEn: "St. Norbert", rank: "optional", color: "white", obligation: false },
  { month: 5, day: 9, name: "S. Ephraem", nameEn: "St. Ephrem", rank: "optional", color: "white", obligation: false },
  { month: 5, day: 11, name: "S. Barnabae", nameEn: "St. Barnabas", rank: "memorial", color: "red", obligation: false },
  { month: 5, day: 13, name: "S. Antonii Patavini", nameEn: "St. Anthony of Padua", rank: "memorial", color: "white", obligation: false },
  { month: 5, day: 19, name: "S. Romualdi", nameEn: "St. Romuald", rank: "optional", color: "white", obligation: false },
  { month: 5, day: 21, name: "S. Aloisii Gonzagae", nameEn: "St. Aloysius Gonzaga", rank: "memorial", color: "white", obligation: false },
  { month: 5, day: 22, name: "Ss. Ioannis Fisher et Thomae More", nameEn: "Saints John Fisher and Thomas More", rank: "memorial", color: "red", obligation: false },
  { month: 5, day: 24, name: "Nativitas S. Ioannis Baptistae", nameEn: "Birth of John the Baptist", rank: "solemnity", color: "white", obligation: false, vigil: true, octave: true },
  { month: 5, day: 27, name: "S. Cyrilli Alexandrini", nameEn: "St. Cyril of Alexandria", rank: "optional", color: "white", obligation: false },
  { month: 5, day: 28, name: "S. Irenaei", nameEn: "St. Irenaeus", rank: "memorial", color: "red", obligation: false },
  { month: 5, day: 29, name: "Ss. Petri et Pauli", nameEn: "Saints Peter and Paul", rank: "solemnity", color: "red", obligation: true, vigil: true, octave: true },

  // July
  { month: 6, day: 3, name: "S. Thomae", nameEn: "St. Thomas", rank: "feast", color: "red", obligation: false },
  { month: 6, day: 4, name: "S. Elisabeth Lusitaniae", nameEn: "St. Elizabeth of Portugal", rank: "optional", color: "white", obligation: false },
  { month: 6, day: 5, name: "S. Antonii Mariae Zaccaria", nameEn: "St. Anthony Zaccaria", rank: "optional", color: "white", obligation: false },
  { month: 6, day: 6, name: "S. Mariae Goretti", nameEn: "St. Maria Goretti", rank: "optional", color: "red", obligation: false },
  { month: 6, day: 9, name: "Ss. Augustini Zhao Rong et Sociorum", nameEn: "Saints Augustine Zhao Rong and Companions", rank: "optional", color: "red", obligation: false },
  { month: 6, day: 11, name: "S. Benedicti", nameEn: "St. Benedict", rank: "memorial", color: "white", obligation: false },
  { month: 6, day: 13, name: "S. Henrici", nameEn: "St. Henry", rank: "optional", color: "white", obligation: false },
  { month: 6, day: 14, name: "S. Camilli de Lellis", nameEn: "St. Camillus de Lellis", rank: "optional", color: "white", obligation: false },
  { month: 6, day: 15, name: "S. Bonaventurae", nameEn: "St. Bonaventure", rank: "memorial", color: "white", obligation: false },
  { month: 6, day: 16, name: "B.M.V. de Monte Carmelo", nameEn: "Our Lady of Mount Carmel", rank: "optional", color: "white", obligation: false },
  { month: 6, day: 20, name: "S. Apollinaris", nameEn: "St. Apollinaris", rank: "optional", color: "red", obligation: false },
  { month: 6, day: 21, name: "S. Laurentii de Brundusio", nameEn: "St. Lawrence of Brindisi", rank: "optional", color: "white", obligation: false },
  { month: 6, day: 22, name: "S. Mariae Magdalenae", nameEn: "St. Mary Magdalene", rank: "feast", color: "white", obligation: false },
  { month: 6, day: 23, name: "S. Birgittae", nameEn: "St. Bridget", rank: "feast", color: "white", obligation: false },
  { month: 6, day: 24, name: "S. Charbel Makhlouf", nameEn: "St. Charbel Makhlouf", rank: "optional", color: "white", obligation: false },
  { month: 6, day: 25, name: "S. Iacobi", nameEn: "St. James", rank: "feast", color: "red", obligation: false },
  { month: 6, day: 26, name: "Ss. Ioachim et Annae", nameEn: "Saints Joachim and Anne", rank: "memorial", color: "white", obligation: false },
  { month: 6, day: 29, name: "S. Marthae", nameEn: "St. Martha", rank: "memorial", color: "white", obligation: false },
  { month: 6, day: 30, name: "Ss. Abdon et Sennen", nameEn: "Saints Abdon and Sennen", rank: "optional", color: "red", obligation: false },
  { month: 6, day: 31, name: "S. Ignatii de Loyola", nameEn: "St. Ignatius of Loyola", rank: "memorial", color: "white", obligation: false },

  // August
  { month: 7, day: 1, name: "S. Alfonsi Mariae de Liguori", nameEn: "St. Alphonsus Liguori", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 2, name: "S. Eusebii Vercellensis", nameEn: "St. Eusebius of Vercelli", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 3, name: "S. Petri Eremitae", nameEn: "St. Peter Julian Eymard", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 4, name: "S. Ioannis Mariae Vianney", nameEn: "St. John Vianney", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 5, name: "Dedicatio S. Mariae", nameEn: "Dedication of St. Mary Major", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 6, name: "Transfiguratio Domini", nameEn: "Transfiguration", rank: "feast", color: "white", obligation: false },
  { month: 7, day: 7, name: "S. Xysti II et Sociorum", nameEn: "Saints Sixtus II and Companions", rank: "optional", color: "red", obligation: false },
  { month: 7, day: 8, name: "S. Dominici", nameEn: "St. Dominic", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 9, name: "S. Teresiae Benedictae a Cruce", nameEn: "St. Teresa Benedicta of the Cross", rank: "optional", color: "red", obligation: false },
  { month: 7, day: 10, name: "S. Laurentii", nameEn: "St. Lawrence", rank: "feast", color: "red", obligation: false, vigil: true },
  { month: 7, day: 11, name: "S. Clarae", nameEn: "St. Clare", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 12, name: "S. Ioannae Franciscae de Chantal", nameEn: "St. Jane Frances de Chantal", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 13, name: "Ss. Pontiani et Hippolyti", nameEn: "Saints Pontian and Hippolytus", rank: "optional", color: "red", obligation: false },
  { month: 7, day: 14, name: "S. Maximiliani Mariae Kolbe", nameEn: "St. Maximilian Kolbe", rank: "memorial", color: "red", obligation: false },
  { month: 7, day: 15, name: "Assumptio B.M.V.", nameEn: "Assumption", rank: "solemnity", color: "white", obligation: true, vigil: true, octave: true },
  { month: 7, day: 16, name: "S. Stephani Hungariae", nameEn: "St. Stephen of Hungary", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 19, name: "S. Ioannis Eudes", nameEn: "St. John Eudes", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 20, name: "S. Bernardi", nameEn: "St. Bernard", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 21, name: "S. Pii X", nameEn: "St. Pius X", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 22, name: "B.M.V. Reginae", nameEn: "Queenship of Mary", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 23, name: "S. Rosae a S. Maria", nameEn: "St. Rose of Lima", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 24, name: "S. Bartholomaei", nameEn: "St. Bartholomew", rank: "feast", color: "red", obligation: false },
  { month: 7, day: 25, name: "S. Ludovici", nameEn: "St. Louis", rank: "optional", color: "white", obligation: false },
  { month: 7, day: 27, name: "S. Monicae", nameEn: "St. Monica", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 28, name: "S. Augustini", nameEn: "St. Augustine", rank: "memorial", color: "white", obligation: false },
  { month: 7, day: 29, name: "Passio S. Ioannis Baptistae", nameEn: "Beheading of John the Baptist", rank: "memorial", color: "red", obligation: false },

  // September
  { month: 8, day: 3, name: "S. Gregorii Magni", nameEn: "St. Gregory the Great", rank: "memorial", color: "white", obligation: false },
  { month: 8, day: 5, name: "S. Teresiae de Calcutta", nameEn: "St. Teresa of Calcutta", rank: "optional", color: "white", obligation: false },
  { month: 8, day: 8, name: "Nativitas B.M.V.", nameEn: "Nativity of Mary", rank: "feast", color: "white", obligation: false },
  { month: 8, day: 9, name: "S. Petri Claver", nameEn: "St. Peter Claver", rank: "optional", color: "white", obligation: false },
  { month: 8, day: 12, name: "S.smi Nominis Mariae", nameEn: "Holy Name of Mary", rank: "optional", color: "white", obligation: false },
  { month: 8, day: 13, name: "S. Ioannis Chrysostomi", nameEn: "St. John Chrysostom", rank: "memorial", color: "white", obligation: false },
  { month: 8, day: 14, name: "Exaltatio S. Crucis", nameEn: "Exaltation of the Cross", rank: "feast", color: "red", obligation: false },
  { month: 8, day: 15, name: "B.M.V. Perdolentis", nameEn: "Our Lady of Sorrows", rank: "memorial", color: "white", obligation: false },
  { month: 8, day: 16, name: "Ss. Cornelii et Cypriani", nameEn: "Saints Cornelius and Cyprian", rank: "memorial", color: "red", obligation: false },
  { month: 8, day: 17, name: "S. Roberti Bellarmino", nameEn: "St. Robert Bellarmine", rank: "optional", color: "white", obligation: false },
  { month: 8, day: 19, name: "S. Ianuarii", nameEn: "St. Januarius", rank: "optional", color: "red", obligation: false },
  { month: 8, day: 20, name: "Ss. Andreae Kim et Sociorum", nameEn: "Saints Andrew Kim Taegon and Companions", rank: "memorial", color: "red", obligation: false },
  { month: 8, day: 21, name: "S. Matthaei", nameEn: "St. Matthew", rank: "feast", color: "red", obligation: false },
  { month: 8, day: 23, name: "S. Pii Pietrelcina", nameEn: "St. Pio of Pietrelcina", rank: "memorial", color: "white", obligation: false },
  { month: 8, day: 26, name: "Ss. Cosmae et Damiani", nameEn: "Saints Cosmas and Damian", rank: "optional", color: "red", obligation: false },
  { month: 8, day: 27, name: "S. Vincentii de Paul", nameEn: "St. Vincent de Paul", rank: "memorial", color: "white", obligation: false },
  { month: 8, day: 28, name: "S. Wenceslai", nameEn: "St. Wenceslaus", rank: "optional", color: "red", obligation: false },
  { month: 8, day: 29, name: "Ss. Michaelis, Gabrielis et Raphaelis", nameEn: "Archangels", rank: "feast", color: "white", obligation: false },
  { month: 8, day: 30, name: "S. Hieronymi", nameEn: "St. Jerome", rank: "memorial", color: "white", obligation: false },

  // October
  { month: 9, day: 1, name: "S. Teresiae a Iesu Infante", nameEn: "St. Thérèse of Lisieux", rank: "memorial", color: "white", obligation: false },
  { month: 9, day: 2, name: "Ss. Angelorum Custodum", nameEn: "Guardian Angels", rank: "memorial", color: "white", obligation: false },
  { month: 9, day: 4, name: "S. Francisci Assisiensis", nameEn: "St. Francis of Assisi", rank: "memorial", color: "white", obligation: false },
  { month: 9, day: 6, name: "S. Brunonis", nameEn: "St. Bruno", rank: "optional", color: "white", obligation: false },
  { month: 9, day: 7, name: "B.M.V. de Rosario", nameEn: "Our Lady of the Rosary", rank: "memorial", color: "white", obligation: false },
  { month: 9, day: 9, name: "Ss. Dionysii et Sociorum", nameEn: "Saints Denis and Companions", rank: "optional", color: "red", obligation: false },
  { month: 9, day: 11, name: "S. Ioannis XXIII", nameEn: "St. John XXIII", rank: "optional", color: "white", obligation: false },
  { month: 9, day: 14, name: "S. Callisti I", nameEn: "St. Callistus I", rank: "optional", color: "red", obligation: false },
  { month: 9, day: 15, name: "S. Teresiae a Iesu", nameEn: "St. Teresa of Ávila", rank: "memorial", color: "white", obligation: false },
  { month: 9, day: 16, name: "S. Hedwigis", nameEn: "St. Hedwig", rank: "optional", color: "white", obligation: false },
  { month: 9, day: 17, name: "S. Ignatii Antiocheni", nameEn: "St. Ignatius of Antioch", rank: "memorial", color: "red", obligation: false },
  { month: 9, day: 18, name: "S. Lucae", nameEn: "St. Luke", rank: "feast", color: "red", obligation: false },
  { month: 9, day: 19, name: "Ss. Ioannis de Brébeuf et Sociorum", nameEn: "Saints John de Brébeuf and Companions", rank: "optional", color: "red", obligation: false },
  { month: 9, day: 22, name: "S. Ioannis Pauli II", nameEn: "St. John Paul II", rank: "optional", color: "white", obligation: false },
  { month: 9, day: 23, name: "S. Ioannis de Capistrano", nameEn: "St. John of Capistrano", rank: "optional", color: "white", obligation: false },
  { month: 9, day: 24, name: "S. Antonii Mariae Claret", nameEn: "St. Anthony Mary Claret", rank: "optional", color: "white", obligation: false },
  { month: 9, day: 28, name: "Ss. Simonis et Iudae", nameEn: "Saints Simon and Jude", rank: "feast", color: "red", obligation: false },

  // November
  { month: 10, day: 1, name: "Omnium Sanctorum", nameEn: "All Saints", rank: "solemnity", color: "white", obligation: true, vigil: true, octave: false },
  { month: 10, day: 2, name: "Commemoratio Omnium Fidelium Defunctorum", nameEn: "All Souls", rank: "commemoration", color: "purple", obligation: false },
  { month: 10, day: 3, name: "S. Martini de Porres", nameEn: "St. Martin de Porres", rank: "optional", color: "white", obligation: false },
  { month: 10, day: 4, name: "S. Caroli Borromaei", nameEn: "St. Charles Borromeo", rank: "memorial", color: "white", obligation: false },
  { month: 10, day: 9, name: "Dedicatio Archibasilicae Ss.mi Salvatoris", nameEn: "Lateran Basilica", rank: "feast", color: "white", obligation: false },
  { month: 10, day: 10, name: "S. Leonis Magni", nameEn: "St. Leo the Great", rank: "memorial", color: "white", obligation: false },
  { month: 10, day: 11, name: "S. Martini Turonensis", nameEn: "St. Martin of Tours", rank: "memorial", color: "white", obligation: false },
  { month: 10, day: 12, name: "S. Iosaphat", nameEn: "St. Josaphat", rank: "memorial", color: "red", obligation: false },
  { month: 10, day: 15, name: "S. Alberti Magni", nameEn: "St. Albert the Great", rank: "optional", color: "white", obligation: false },
  { month: 10, day: 16, name: "S. Gertrudis Magnae", nameEn: "St. Gertrude", rank: "optional", color: "white", obligation: false },
  { month: 10, day: 17, name: "S. Elisabethae Hungariae", nameEn: "St. Elizabeth of Hungary", rank: "memorial", color: "white", obligation: false },
  { month: 10, day: 18, name: "Dedicatio Basilicarum Petri et Pauli", nameEn: "Dedication of Basilicas of Peter and Paul", rank: "optional", color: "white", obligation: false },
  { month: 10, day: 21, name: "Praesentatio B.M.V.", nameEn: "Presentation of Mary", rank: "memorial", color: "white", obligation: false },
  { month: 10, day: 22, name: "S. Caeciliae", nameEn: "St. Cecilia", rank: "memorial", color: "red", obligation: false },
  { month: 10, day: 23, name: "S. Clementis I", nameEn: "St. Clement I", rank: "optional", color: "red", obligation: false },
  { month: 10, day: 24, name: "Ss. Andreae Dung-Lac et Sociorum", nameEn: "Saints Andrew Dung-Lac and Companions", rank: "memorial", color: "red", obligation: false },
  { month: 10, day: 25, name: "S. Catharinae Alexandriae", nameEn: "St. Catherine of Alexandria", rank: "optional", color: "red", obligation: false },
  { month: 10, day: 30, name: "S. Andreae", nameEn: "St. Andrew", rank: "feast", color: "red", obligation: false, vigil: true },

  // December
  { month: 11, day: 3, name: "S. Francisci Xaverii", nameEn: "St. Francis Xavier", rank: "memorial", color: "white", obligation: false },
  { month: 11, day: 4, name: "S. Ioannis Damasceni", nameEn: "St. John Damascene", rank: "optional", color: "white", obligation: false },
  { month: 11, day: 6, name: "S. Nicolai", nameEn: "St. Nicholas", rank: "optional", color: "white", obligation: false },
  { month: 11, day: 7, name: "S. Ambrosii", nameEn: "St. Ambrose", rank: "memorial", color: "white", obligation: false },
  { month: 11, day: 8, name: "Immaculata Conceptio B.M.V.", nameEn: "Immaculate Conception", rank: "solemnity", color: "white", obligation: true, vigil: true, octave: false },
  { month: 11, day: 9, name: "S. Ioannis Didaci Cuauhtlatoatzin", nameEn: "St. Juan Diego", rank: "optional", color: "white", obligation: false },
  { month: 11, day: 10, name: "B.M.V. de Loreto", nameEn: "Our Lady of Loreto", rank: "optional", color: "white", obligation: false },
  { month: 11, day: 11, name: "S. Damasi I", nameEn: "St. Damasus I", rank: "optional", color: "white", obligation: false },
  { month: 11, day: 12, name: "B.M.V. de Guadalupe", nameEn: "Our Lady of Guadalupe", rank: "feast", color: "white", obligation: false },
  { month: 11, day: 13, name: "S. Luciae", nameEn: "St. Lucy", rank: "memorial", color: "red", obligation: false },
  { month: 11, day: 14, name: "S. Ioannis a Cruce", nameEn: "St. John of the Cross", rank: "memorial", color: "white", obligation: false },
  { month: 11, day: 21, name: "S. Petri Canisii", nameEn: "St. Peter Canisius", rank: "optional", color: "white", obligation: false },
  { month: 11, day: 23, name: "S. Ioannis de Kety", nameEn: "St. John of Kanty", rank: "optional", color: "white", obligation: false },
  { month: 11, day: 25, name: "Nativitas Domini", nameEn: "Christmas", rank: "solemnity", color: "white", obligation: true, vigil: true, octave: true },
  { month: 11, day: 26, name: "S. Stephani", nameEn: "St. Stephen", rank: "feast", color: "red", obligation: false },
  { month: 11, day: 27, name: "S. Ioannis Apostoli", nameEn: "St. John", rank: "feast", color: "white", obligation: false },
  { month: 11, day: 28, name: "Ss. Innocentium", nameEn: "Holy Innocents", rank: "feast", color: "red", obligation: false },
  { month: 11, day: 29, name: "S. Thomae Becket", nameEn: "St. Thomas Becket", rank: "optional", color: "red", obligation: false },
  { month: 11, day: 31, name: "S. Silvestri I", nameEn: "St. Sylvester I", rank: "optional", color: "white", obligation: false }
];

// ==============================
// EASTER COMPUTUS (Meeus/Jones/Butcher)
// ==============================
function getEasterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  
  return new Date(year, month - 1, day);
}

// ==============================
// ADVENT START (4th Sunday before Christmas)
// ==============================
function getAdventStart(year) {
  const christmas = new Date(year, 11, 25);
  const dayOfWeek = christmas.getDay();
  const daysToSubtract = 28 + (dayOfWeek === 0 ? 0 : 7 - dayOfWeek);
  const adventStart = new Date(christmas);
  adventStart.setDate(christmas.getDate() - daysToSubtract);
  return adventStart;
}

// ==============================
// BAPTISM OF THE LORD (End of Christmas season)
// ==============================
function getBaptismDate(year) {
  const epiphany = new Date(year, 0, 6);
  const epiphanyDay = epiphany.getDay();
  const baptism = new Date(year, 0, epiphanyDay === 0 ? 7 : 8);
  return baptism;
}

// ==============================
// MOVEABLE FEASTS (from Easter) with year boundary fix
// ==============================
function getMoveableFeasts(easterDate) {
  const year = easterDate.getFullYear();
  const easter = new Date(easterDate);
  const feasts = [];
  
  const addFeast = (days, name, nameEn, rank, color, opts = {}) => {
    let date = new Date(year, easter.getMonth(), easter.getDate() + days);
    
    // Handle year boundary
    if (date.getFullYear() > year) {
      date = new Date(year + 1, 0, date.getDate() - 365);
    } else if (date.getFullYear() < year) {
      date = new Date(year - 1, 11, date.getDate() + 365);
    }
    
    feasts.push({ 
      name, nameEn, date, rank, color, 
      vigil: opts.vigil || false,
      octave: opts.octave || false,
      obligation: opts.obligation || false,
      fast: opts.fast || false,
      abstinence: opts.abstinence || false
    });
  };
  
  addFeast(-7, "Dominica in Palmis", "Palm Sunday", "solemnity", "red");
  addFeast(-3, "Feria V in Cena Domini", "Holy Thursday", "solemnity", "white");
  addFeast(-2, "Feria VI in Passione Domini", "Good Friday", "solemnity", "red", { fast: true, abstinence: true });
  addFeast(-1, "Sabbatum Sanctum", "Holy Saturday", "solemnity", "purple", { vigil: true });
  addFeast(0, "Dominica Resurrectionis", "Easter Sunday", "solemnity", "gold", { obligation: true, octave: true });
  addFeast(39, "Ascensio Domini", "Ascension", "solemnity", "white", { obligation: true, vigil: true });
  addFeast(49, "Pentecostes", "Pentecost", "solemnity", "red", { obligation: true, vigil: true, octave: true });
  addFeast(56, "Ss.mae Trinitatis", "Trinity Sunday", "solemnity", "white");
  addFeast(60, "Corpus Christi", "Corpus Christi", "solemnity", "white", { obligation: true, vigil: true, octave: true });
  addFeast(68, "Sacratissimi Cordis Iesu", "Sacred Heart", "solemnity", "white");
  addFeast(69, "Immaculati Cordis Mariae", "Immaculate Heart of Mary", "memorial", "white");
  
  return feasts;
}

// ==============================
// LITURGICAL SEASONS - With Laetare/Gaudete detection
// ==============================
function getLiturgicalSeason(date, easterDate) {
  const year = date.getFullYear();
  const easter = easterDate || getEasterDate(year);
  
  const adventStart = getAdventStart(year);
  const christmas = new Date(year, 11, 25);
  const baptism = getBaptismDate(year);
  
  const ashWednesday = new Date(easter);
  ashWednesday.setDate(easter.getDate() - 46);
  
  const pentecost = new Date(easter);
  pentecost.setDate(easter.getDate() + 49);
  
  // Check for Laetare Sunday (4th Sunday of Lent)
  const laetareSunday = new Date(easter);
  laetareSunday.setDate(easter.getDate() - 21); // 3 weeks before Easter
  
  // Check for Gaudete Sunday (3rd Sunday of Advent)
  const gaudeteSunday = getAdventStart(year);
  gaudeteSunday.setDate(gaudeteSunday.getDate() + 14);
  
  if (date >= adventStart && date < christmas) {
    if (date.getMonth() === gaudeteSunday.getMonth() && date.getDate() === gaudeteSunday.getDate()) {
      return { name: "Dominica Gaudete", nameEn: "Gaudete Sunday", color: "rose" };
    }
    return { name: "Adventus", nameEn: "Advent", color: "purple" };
  }
  
  if (date >= christmas && date < baptism) 
    return { name: "Tempus Nativitatis", nameEn: "Christmas", color: "white" };
  
  if (date >= ashWednesday && date < easter) {
    if (date.getMonth() === laetareSunday.getMonth() && date.getDate() === laetareSunday.getDate()) {
      return { name: "Dominica Laetare", nameEn: "Laetare Sunday", color: "rose" };
    }
    return { name: "Quadragesima", nameEn: "Lent", color: "purple" };
  }
  
  if (date >= easter && date < pentecost) 
    return { name: "Tempus Paschale", nameEn: "Easter", color: "white" };
  
  return { name: "Tempus per annum", nameEn: "Ordinary Time", color: "green" };
}

// ==============================
// LITURGICAL WEEK
// ==============================
function getLiturgicalWeek(date, easterDate) {
  const year = date.getFullYear();
  const easter = easterDate || getEasterDate(year);
  
  if (date < easter && date >= new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() - 46)) {
    const daysBeforeEaster = Math.floor((easter - date) / (1000*60*60*24));
    const week = Math.floor((46 - daysBeforeEaster) / 7) + 1;
    return { la: `Hebdomada ${week} Quadragesimae`, en: `Week ${week} of Lent` };
  }
  
  if (date >= easter && date < new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() + 49)) {
    const daysAfterEaster = Math.floor((date - easter) / (1000*60*60*24));
    const week = Math.floor(daysAfterEaster / 7) + 1;
    return { la: `Hebdomada ${week} Paschae`, en: `Week ${week} of Easter` };
  }
  
  const jan1 = new Date(year, 0, 1);
  const dayOfYear = Math.floor((date - jan1) / (1000*60*60*24)) + 1;
  const weekOfYear = Math.floor(dayOfYear / 7) + 1;
  return { la: `Hebdomada ${weekOfYear} per annum`, en: `Week ${weekOfYear} in Ordinary Time` };
}

// ==============================
// LITURGICAL YEAR (A/B/C)
// ==============================
function getLiturgicalYear(date) {
  const year = date.getFullYear();
  const adventStart = getAdventStart(year);
  
  const liturgicalYear = date < adventStart ? year - 1 : year;
  const cycle = (liturgicalYear + 1) % 3;
  
  let letter = cycle === 0 ? "C" : cycle === 1 ? "A" : "B";
  return { la: `Annus ${letter}`, en: `Year ${letter}` };
}

// ==============================
// FEAST LOOKUP with transfer rules
// ==============================
function getFeastForDate(date, easterDate) {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const easter = easterDate || getEasterDate(year);
  
  const moveable = getMoveableFeasts(easter);
  for (let feast of moveable) {
    if (feast.date.getMonth() === month && feast.date.getDate() === day) {
      return feast;
    }
  }
  
  for (let feast of fixedFeasts) {
    if (feast.month === month && feast.day === day) {
      // Handle transfer rules
      if (feast.transferRule === "sunday") {
        const feastDate = new Date(year, feast.month, feast.day);
        if (feastDate.getDay() === 0) {
          // If feast falls on Sunday, it's celebrated on Monday
          if (day === feast.day + 1) {
            return feast; // This Monday celebrates the transferred feast
          }
          return null; // Sunday itself does not celebrate the feast
        }
      }
      return feast;
    }
  }
  
  return null;
}

// ==============================
// VIGIL DETECTION - Check up to 3 days ahead
// ==============================
function getVigilInfo(date, easterDate) {
  for (let i = 1; i <= 3; i++) {
    const checkDate = new Date(date);
    checkDate.setDate(date.getDate() + i);
    const feast = getFeastForDate(checkDate, easterDate);
    if (feast && feast.vigil) {
      return {
        hasVigil: true,
        feastName: feast.name,
        feastNameEn: feast.nameEn,
        daysBefore: i
      };
    }
  }
  return { hasVigil: false };
}

// ==============================
// OCTAVE DETECTION - Limit to current day only
// ==============================
function getOctaveInfo(date, easterDate) {
  const easter = easterDate || getEasterDate(date.getFullYear());
  
  const feastsWithOctaves = fixedFeasts.filter(f => f.octave).concat(
    getMoveableFeasts(easter).filter(f => f.octave)
  );
  
  for (let feast of feastsWithOctaves) {
    let feastDate;
    if (feast.date) {
      feastDate = new Date(feast.date);
    } else {
      feastDate = new Date(date.getFullYear(), feast.month, feast.day);
    }
    
    const octaveStart = new Date(feastDate);
    const octaveEnd = new Date(feastDate);
    octaveEnd.setDate(feastDate.getDate() + 7);
    
    if (date >= octaveStart && date <= octaveEnd) {
      return [{
        feastName: feast.name,
        feastNameEn: feast.nameEn,
        dayOfOctave: Math.floor((date - octaveStart) / (1000*60*60*24)) + 1
      }];
    }
  }
  
  return [];
}

// ==============================
// FASTING & ABSTINENCE
// ==============================
function getFastingRules(date, easterDate) {
  const year = date.getFullYear();
  const easter = easterDate || getEasterDate(year);
  const ashWednesday = new Date(easter);
  ashWednesday.setDate(easter.getDate() - 46);
  const goodFriday = new Date(easter);
  goodFriday.setDate(easter.getDate() - 2);
  
  if ((date.getMonth() === ashWednesday.getMonth() && date.getDate() === ashWednesday.getDate()) ||
      (date.getMonth() === goodFriday.getMonth() && date.getDate() === goodFriday.getDate())) {
    return { fast: true, abstinence: true };
  }
  
  if (date >= ashWednesday && date < easter && date.getDay() === 5) {
    return { fast: false, abstinence: true };
  }
  
  return { fast: false, abstinence: false };
}

// ==============================
// ABBREVIATION SYSTEM
// ==============================
const abbreviations = {
  "Nativitas Domini": "Nat.",
  "Assumptio B.M.V.": "Ass.",
  "Immaculata Conceptio B.M.V.": "Imm. Conc.",
  "Omnium Sanctorum": "All Saints",
  "Commemoratio Omnium Fidelium Defunctorum": "All Souls",
  "Ss. Petri et Pauli": "Ss. Peter & Paul",
  "S. Ioseph": "St. Joseph",
  "S. Ioannis Baptistae": "St. John Bapt.",
  "S. Ioannis Apostoli": "St. John",
  "Ss. Ioannis Fisher et Thomae More": "Ss. Fisher & More",
  "Transfiguratio Domini": "Transfig.",
  "Exaltatio S. Crucis": "Exalt. Cross",
  "Dedicatio Archibasilicae Ss.mi Salvatoris": "Lateran",
  "Annuntiatio Domini": "Annunc.",
  "Praesentatio Domini": "Present.",
  "Nativitas S. Ioannis Baptistae": "Nat. John Bapt.",
  "S. Mariae Magdalenae": "St. Mary Magd.",
  "S. Francisci Assisiensis": "St. Francis",
  "S. Teresiae a Iesu Infante": "St. Thérèse",
  "S. Teresiae a Iesu": "St. Teresa",
  "S. Dominici": "St. Dominic",
  "S. Benedicti": "St. Benedict",
  "S. Patricii": "St. Patrick",
  "S. Andreae": "St. Andrew",
  "S. Iacobi": "St. James",
  "S. Thomae": "St. Thomas",
  "S. Philippi et Iacobi": "Ss. Philip & James",
  "S. Barnabae": "St. Barnabas",
  "S. Matthiae": "St. Matthias",
  "S. Bartholomaei": "St. Bartholomew",
  "S. Matthaei": "St. Matthew",
  "S. Simonis et Iudae": "Ss. Simon & Jude",
  "S. Lucae": "St. Luke",
  "S. Marci": "St. Mark",
  "S. Stephani": "St. Stephen",
  "S. Laurentii": "St. Lawrence",
  "S. Caeciliae": "St. Cecilia",
  "S. Catharinae Senensis": "St. Catherine",
  "S. Birgittae": "St. Bridget",
  "S. Martini": "St. Martin",
  "S. Nicolai": "St. Nicholas",
  "S. Ambrosii": "St. Ambrose",
  "S. Augustini": "St. Augustine",
  "S. Hieronymi": "St. Jerome",
  "S. Gregorii Magni": "St. Gregory",
  "S. Leonis Magni": "St. Leo",
  "S. Athanasii": "St. Athanasius",
  "S. Basilii": "St. Basil",
  "S. Ioannis Chrysostomi": "St. John Chrys.",
  "S. Cyrilli": "St. Cyril",
  "S. Methodii": "St. Methodius"
};

function abbreviateFeast(name) {
  if (abbreviations[name]) return abbreviations[name];
  
  const words = name.split(' ');
  if (words.length > 2) {
    return words.slice(0, 2).map(w => w.substring(0, 4)).join(' ') + '.';
  }
  
  return name.substring(0, 8) + '.';
}

// ==============================
// LATIN MONTH NAMES
// ==============================
const monthNamesLa = [
  "Ianuarius", "Februarius", "Martius", "Aprilis", "Maius", "Iunius",
  "Iulius", "Augustus", "September", "October", "November", "December"
];

// ==============================
// RGB COLOR MAP for today tint
// ==============================
const colorRgbMap = {
  white: 'var(--liturgical-white-rgb)',
  red: 'var(--liturgical-red-rgb)',
  green: 'var(--liturgical-green-rgb)',
  purple: 'var(--purple-rgb)',
  rose: 'var(--liturgical-rose-rgb)',
  gold: 'var(--liturgical-gold-rgb)'
};

// ==============================
// DOM ELEMENTS
// ==============================
document.addEventListener('DOMContentLoaded', function() {
  const headerSubhead = document.querySelectorAll('.header-sub');
  const liturgicalBadge = document.getElementById("liturgicalBadge");
  const headerGregorian = document.getElementById("headerGregorian");
  const headerLiturgical = document.getElementById("headerLiturgical");
  const toggleToday = document.getElementById("toggleToday");
  const liturgicalSeason = document.getElementById("liturgicalSeason");
  const liturgicalWeek = document.getElementById("liturgicalWeek");
  const liturgicalYear = document.getElementById("liturgicalYear");
  const liturgicalColorDisplay = document.getElementById("liturgicalColorDisplay");
  const liturgicalColorDot = document.getElementById("liturgicalColorDot");
  const liturgicalColorLa = document.getElementById("liturgicalColor-la");
  const liturgicalColorEn = document.getElementById("liturgicalColor-en");
  const rangeWarning = document.getElementById("rangeWarning");
  const monthName = document.getElementById("monthName");
  const monthDays = document.getElementById("monthDays");
  const monthFeast = document.getElementById("monthFeast");
  const monthSeason = document.getElementById("monthSeason");
  const daysContainer = document.getElementById("daysContainer");
  const feastNotice = document.getElementById("feastNotice");
  const feastNoticeTextLa = document.getElementById("feastNoticeText-la");
  const feastNoticeTextEn = document.getElementById("feastNoticeText-en");
  const errorBoundary = document.getElementById("errorBoundary");
  const errorMessageLa = document.getElementById("errorMessage-la");
  const errorMessageEn = document.getElementById("errorMessage-en");
  const errorRetry = document.getElementById("errorRetry");
  const infoGregorian = document.getElementById("infoGregorian");
  const infoWeekday = document.getElementById("infoWeekday");
  const infoFeast = document.getElementById("infoFeast");
  const infoRank = document.getElementById("infoRank");
  const infoColor = document.getElementById("infoColor");
  const infoSeason = document.getElementById("infoSeason");
  const infoSeasonWeek = document.getElementById("infoSeasonWeek");
  const infoLiturgicalYear = document.getElementById("infoLiturgicalYear");
  const infoHolyDay = document.getElementById("infoHolyDay");
  const infoFasting = document.getElementById("infoFasting");
  const infoAbstinence = document.getElementById("infoAbstinence");
  const vigilGrid = document.getElementById("vigilGrid");
  const vigilToday = document.getElementById("vigilToday");
  const vigilTomorrow = document.getElementById("vigilTomorrow");
  const octaveGrid = document.getElementById("octaveGrid");
  const dataSourceNote = document.getElementById("dataSourceNote");
  const yearCycleDisplay = document.getElementById("yearCycleDisplay");
  const prevYear = document.getElementById("prevYear");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");
  const nextYear = document.getElementById("nextYear");
  const settingsToggle = document.getElementById("settingsToggle");
  const settingsMenu = document.getElementById("settingsMenu");
  const toast = document.getElementById("toast");
  const detailLevel = document.getElementById("detailLevel");
  const languagePreference = document.getElementById("languagePreference");
  const showHolyDays = document.getElementById("showHolyDays");
  const showRankIcons = document.getElementById("showRankIcons");
  const showVigils = document.getElementById("showVigils");
  const showOctaves = document.getElementById("showOctaves");
  const showFast = document.getElementById("showFast");
  const compactMode = document.getElementById("compactMode");
  const resetSettings = document.getElementById("resetSettings");

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let selectedDate = new Date(currentDate);
  let easterDate = getEasterDate(currentYear);
  
  let settings = {
    detailLevel: 'standard',
    language: 'bilingual',
    showHolyDays: true,
    showRankIcons: true,
    showVigils: true,
    showOctaves: true,
    showFast: true,
    compactMode: true
  };

  function loadSettings() {
    try {
      const saved = localStorage.getItem('chronoforgeLiturgia');
      if (saved) {
        const parsed = JSON.parse(saved);
        settings = { ...settings, ...parsed };
        
        if (detailLevel) detailLevel.value = settings.detailLevel;
        if (languagePreference) languagePreference.value = settings.language;
        if (showHolyDays) showHolyDays.checked = settings.showHolyDays;
        if (showRankIcons) showRankIcons.checked = settings.showRankIcons;
        if (showVigils) showVigils.checked = settings.showVigils;
        if (showOctaves) showOctaves.checked = settings.showOctaves;
        if (showFast) showFast.checked = settings.showFast;
        if (compactMode) compactMode.checked = settings.compactMode;
        
        updateLanguageBodyClass();
        updateLanguageSeparators();
      }
    } catch (e) {
      console.warn('Settings load failed', e);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem('chronoforgeLiturgia', JSON.stringify(settings));
    } catch (e) {
      console.warn('Settings save failed', e);
    }
  }

  function updateLanguageBodyClass() {
    document.body.classList.remove('lang-latin', 'lang-english', 'lang-bilingual');
    document.body.classList.add(`lang-${settings.language}`);
    
    if (languagePreference) {
      const options = languagePreference.querySelectorAll('option');
      options.forEach(opt => {
        opt.textContent = opt.getAttribute(`data-${settings.language}`) || opt.textContent;
      });
    }
  }

  function updateLanguageSeparators() {
    const separators = document.querySelectorAll('.header-sep, .legend-sep');
    separators.forEach(sep => {
      if (settings.language === 'latin' || settings.language === 'english') {
        sep.style.display = 'none';
      } else {
        sep.style.display = 'inline';
      }
    });
  }

  function showToast(messageLa, messageEn) {
    if (!toast) return;
    toast.textContent = settings.language === 'latin' ? messageLa : messageEn;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  }

  function updateCompactModes() {
    document.body.classList.toggle('compact-mode', settings.compactMode);
  }

  function updateHeader() {
    if (!headerGregorian) return;
    
    const season = getLiturgicalSeason(currentDate, easterDate);
    const feast = getFeastForDate(currentDate, easterDate);
    const week = getLiturgicalWeek(currentDate, easterDate);
    const year = getLiturgicalYear(currentDate);
    const vigil = getVigilInfo(currentDate, easterDate);
    
    headerGregorian.textContent = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long' 
    });
    
    if (headerLiturgical) {
      const laSpan = headerLiturgical.querySelector('.header-la');
      const enSpan = headerLiturgical.querySelector('.header-en');
      if (laSpan && enSpan) {
        if (feast) {
          laSpan.textContent = feast.name;
          enSpan.textContent = feast.nameEn;
        } else {
          laSpan.textContent = season.name;
          enSpan.textContent = season.nameEn;
        }
      }
    }
    
    if (liturgicalBadge) {
      const badgeLa = liturgicalBadge.querySelector('.badge-la');
      const badgeEn = liturgicalBadge.querySelector('.badge-en');
      if (badgeLa && badgeEn) {
        badgeLa.textContent = season.name;
        badgeEn.textContent = season.nameEn;
        
        // Update badge background color based on season
        liturgicalBadge.className = `liturgical-badge season-${season.color}`;
      }
    }
    
    if (liturgicalSeason) {
      const laSpan = liturgicalSeason.querySelector('.header-la');
      const enSpan = liturgicalSeason.querySelector('.header-en');
      if (laSpan && enSpan) {
        laSpan.textContent = season.name;
        enSpan.textContent = season.nameEn;
      }
    }
    
    if (liturgicalWeek) {
      const laSpan = liturgicalWeek.querySelector('.header-la');
      const enSpan = liturgicalWeek.querySelector('.header-en');
      if (laSpan && enSpan) {
        laSpan.textContent = week.la;
        enSpan.textContent = week.en;
      }
    }
    
    if (liturgicalYear) {
      const laSpan = liturgicalYear.querySelector('.header-la');
      const enSpan = liturgicalYear.querySelector('.header-en');
      if (laSpan && enSpan) {
        laSpan.textContent = year.la;
        enSpan.textContent = year.en;
      }
    }
    
    if (liturgicalColorDisplay) {
      const color = season.color;
      liturgicalColorDot.className = `color-dot ${color}`;
      if (liturgicalColorLa) liturgicalColorLa.textContent = 
        color === 'white' ? 'Albus' :
        color === 'red' ? 'Ruber' :
        color === 'green' ? 'Viridis' :
        color === 'purple' ? 'Purpureus' :
        color === 'rose' ? 'Roseus' : 'Aureus';
      if (liturgicalColorEn) liturgicalColorEn.textContent = 
        color.charAt(0).toUpperCase() + color.slice(1);
    }
    
    if (toggleToday) {
      const isToday = currentDate.toDateString() === new Date().toDateString();
      toggleToday.setAttribute('data-today', isToday ? 'true' : 'false');
    }
  }

  function renderCalendar() {
    if (!daysContainer) return;
    
    try {
      daysContainer.innerHTML = '';
      easterDate = getEasterDate(currentYear);
      
      const firstDay = new Date(currentYear, currentMonth, 1);
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startOffset = firstDay.getDay();
      
      for (let i = 0; i < startOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'day-cell empty';
        daysContainer.appendChild(empty);
      }
      
      for (let d = 1; d <= daysInMonth; d++) {
        const cellDate = new Date(currentYear, currentMonth, d);
        const feast = getFeastForDate(cellDate, easterDate);
        const season = getLiturgicalSeason(cellDate, easterDate);
        const fasting = getFastingRules(cellDate, easterDate);
        const vigil = getVigilInfo(cellDate, easterDate);
        const octaves = getOctaveInfo(cellDate, easterDate);
        const isToday = cellDate.toDateString() === new Date().toDateString();
        
        const cell = document.createElement('div');
        cell.className = 'day-cell';
        
        if (isToday) {
          cell.classList.add('today');
          // Add RGB variable for today tint
          cell.style.setProperty('--liturgical-color-rgb', colorRgbMap[season.color] || 'var(--purple-rgb)');
        }
        
        cell.classList.add(season.color);
        
        cell.dataset.date = cellDate.toISOString();
        cell.dataset.year = currentYear;
        cell.dataset.month = currentMonth;
        cell.dataset.day = d;
        
        let feastNameHtml = '';
        if (feast) {
          const feastText = settings.language === 'latin' ? feast.name : 
                           settings.language === 'english' ? feast.nameEn : 
                           `${abbreviateFeast(feast.name)}`;
          feastNameHtml = `<div class="feast-name">${feastText}</div>`;
        }
        
        let rankIconHtml = '';
        if (settings.showRankIcons && feast) {
          let icon = '';
          if (feast.rank === 'solemnity') icon = '✠';
          else if (feast.rank === 'feast') icon = '†';
          else if (feast.rank === 'memorial') icon = '🕊️';
          else if (feast.rank === 'optional') icon = '☆';
          else if (feast.rank === 'commemoration') icon = '○';
          rankIconHtml = `<span class="rank-icon ${feast.rank}" title="${feast.rank}">${icon}</span>`;
        }
        
        let observanceHtml = '<div class="observance-icons">';
        if (settings.showHolyDays && feast?.obligation) {
          observanceHtml += `<span class="observance-icon holy-icon" title="Holy day of obligation">⛪</span>`;
        }
        if (settings.showVigils && vigil.hasVigil) {
          observanceHtml += `<span class="observance-icon vigil-icon" title="Vigil of ${vigil.feastNameEn}">🕯️</span>`;
        }
        if (settings.showOctaves && octaves.length > 0) {
          observanceHtml += `<span class="observance-icon octave-icon" title="Octave of ${octaves[0].feastNameEn}">⌛</span>`;
        }
        if (settings.showFast && (fasting.fast || fasting.abstinence)) {
          observanceHtml += `<span class="observance-icon fast-icon" title="${fasting.fast ? 'Fast' : 'Abstinence'}">✝</span>`;
        }
        observanceHtml += '</div>';
        
        cell.innerHTML = `
          <div class="gregorian-date">${d}</div>
          ${feastNameHtml}
          ${rankIconHtml}
          ${observanceHtml}
        `;
        
        cell.addEventListener('click', () => selectDate(cellDate));
        daysContainer.appendChild(cell);
      }
      
      if (monthName) {
        monthName.textContent = settings.language === 'latin' 
          ? monthNamesLa[currentMonth] 
          : currentDate.toLocaleDateString('en-US', { month: 'long' });
      }
      
      if (monthDays) {
        monthDays.textContent = `${daysInMonth}`;
      }
      
      const monthFeasts = fixedFeasts.filter(f => f.month === currentMonth);
      if (monthFeast) {
        const laSpan = monthFeast.querySelector('.header-la');
        const enSpan = monthFeast.querySelector('.header-en');
        if (laSpan && enSpan) {
          if (monthFeasts.length > 0) {
            laSpan.textContent = monthFeasts[0].name;
            enSpan.textContent = monthFeasts[0].nameEn;
          } else {
            laSpan.textContent = '—';
            enSpan.textContent = '—';
          }
        }
      }
      
      const season = getLiturgicalSeason(new Date(currentYear, currentMonth, 15), easterDate);
      if (monthSeason) {
        const laSpan = monthSeason.querySelector('.header-la');
        const enSpan = monthSeason.querySelector('.header-en');
        if (laSpan && enSpan) {
          laSpan.textContent = season.name;
          enSpan.textContent = season.nameEn;
        }
      }
      
      if (errorBoundary) errorBoundary.classList.add('hidden');
      
    } catch (error) {
      console.error('Render error:', error);
      if (errorBoundary) {
        errorBoundary.classList.remove('hidden');
        if (errorMessageLa) errorMessageLa.textContent = 'Error';
        if (errorMessageEn) errorMessageEn.textContent = 'Error';
        if (errorRetry) {
          errorRetry.addEventListener('click', () => {
            errorBoundary.classList.add('hidden');
            renderCalendar();
          }, { once: true });
        }
      }
    }
  }

  function selectDate(date) {
    selectedDate = new Date(date);
    
    document.querySelectorAll('.day-cell').forEach(cell => {
      cell.classList.remove('active-day');
    });
    
    const selectedCell = Array.from(document.querySelectorAll('.day-cell')).find(cell => 
      cell.dataset.date === date.toISOString()
    );
    if (selectedCell) {
      selectedCell.classList.add('active-day');
      // Ensure feast name is visible on active cell
      const feastName = selectedCell.querySelector('.feast-name');
      if (feastName) {
        feastName.style.opacity = '1';
        feastName.style.color = 'var(--ink)';
      }
    }
    
    updateInfoPanel(date);
    
    const feast = getFeastForDate(date, easterDate);
    if (feast && feastNotice) {
      if (feastNoticeTextLa) feastNoticeTextLa.textContent = feast.name;
      if (feastNoticeTextEn) feastNoticeTextEn.textContent = feast.nameEn;
      feastNotice.classList.remove('hidden');
      setTimeout(() => feastNotice.classList.add('hidden'), 5000);
    }
  }

  function updateInfoPanel(date) {
    if (!infoGregorian) return;
    
    const feast = getFeastForDate(date, easterDate);
    const season = getLiturgicalSeason(date, easterDate);
    const week = getLiturgicalWeek(date, easterDate);
    const year = getLiturgicalYear(date);
    const fasting = getFastingRules(date, easterDate);
    const vigil = getVigilInfo(date, easterDate);
    const octaves = getOctaveInfo(date, easterDate);
    
    const isBasic = settings.detailLevel === 'basic';
    const isComplete = settings.detailLevel === 'complete';
    
    infoGregorian.textContent = date.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long', day: 'numeric' 
    });
    
    if (infoWeekday) {
      const weekday = date.getDay();
      const en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      infoWeekday.textContent = en[weekday];
    }
    
    if (infoFeast) {
      infoFeast.textContent = feast ? 
        (settings.language === 'latin' ? feast.name : 
         settings.language === 'english' ? feast.nameEn : 
         `${feast.name} / ${feast.nameEn}`) : '—';
    }
    
    if (infoRank && feast) {
      infoRank.textContent = feast.rank;
      infoRank.parentElement.style.display = feast ? 'flex' : 'none';
    } else if (infoRank) {
      infoRank.parentElement.style.display = 'none';
    }
    
    if (infoColor) {
      infoColor.textContent = season.color.charAt(0).toUpperCase() + season.color.slice(1);
    }
    
    if (infoSeason) infoSeason.textContent = season.nameEn;
    if (infoSeasonWeek) infoSeasonWeek.textContent = week.en;
    if (infoLiturgicalYear) infoLiturgicalYear.textContent = year.en;
    
    if (infoHolyDay) {
      infoHolyDay.textContent = feast?.obligation ? 'Yes' : 'No';
      infoHolyDay.parentElement.style.display = !isBasic ? 'flex' : 'none';
    }
    
    if (infoFasting) {
      infoFasting.textContent = fasting.fast ? 'Yes' : 'No';
      infoFasting.parentElement.style.display = isComplete ? 'flex' : 'none';
    }
    
    if (infoAbstinence) {
      infoAbstinence.textContent = fasting.abstinence ? 'Yes' : 'No';
      infoAbstinence.parentElement.style.display = isComplete ? 'flex' : 'none';
    }
    
    if (vigilGrid) {
      if (settings.showVigils && vigil.hasVigil) {
        vigilGrid.parentElement.parentElement.style.display = 'block';
        if (vigilToday) {
          vigilToday.innerHTML = settings.language === 'latin' ? 
            `Hodie: Vigilia ${vigil.feastName}` : 
            `Today: Vigil of ${vigil.feastNameEn}`;
        }
        if (vigilTomorrow) {
          const tomorrowFeast = getFeastForDate(new Date(date.getTime() + 86400000), easterDate);
          if (tomorrowFeast) {
            vigilTomorrow.innerHTML = settings.language === 'latin' ?
              `Cras: ${tomorrowFeast.name}` :
              `Tomorrow: ${tomorrowFeast.nameEn}`;
          }
        }
      } else {
        vigilGrid.parentElement.parentElement.style.display = 'none';
      }
    }
    
    if (octaveGrid && settings.showOctaves) {
      if (octaves.length > 0) {
        octaveGrid.parentElement.parentElement.style.display = 'block';
        octaveGrid.innerHTML = '';
        octaves.forEach(oct => {
          const item = document.createElement('div');
          item.className = 'octave-item';
          item.innerHTML = settings.language === 'latin' ?
            `${oct.feastName} - Dies ${oct.dayOfOctave}` :
            `${oct.feastNameEn} - Day ${oct.dayOfOctave}`;
          octaveGrid.appendChild(item);
        });
      } else {
        octaveGrid.parentElement.parentElement.style.display = 'none';
      }
    }
    
    if (yearCycleDisplay) {
      const laSpan = yearCycleDisplay.querySelector('.header-la');
      const enSpan = yearCycleDisplay.querySelector('.header-en');
      if (laSpan && enSpan) {
        laSpan.textContent = year.la;
        enSpan.textContent = year.en;
      }
    }
  }

  function prevMonthFn() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    currentDate = new Date(currentYear, currentMonth, 1);
    easterDate = getEasterDate(currentYear);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast('Mensis prior', 'Previous month');
  }

  function nextMonthFn() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    currentDate = new Date(currentYear, currentMonth, 1);
    easterDate = getEasterDate(currentYear);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast('Mensis sequens', 'Next month');
  }

  function prevYearFn() {
    currentYear--;
    currentDate = new Date(currentYear, currentMonth, 1);
    easterDate = getEasterDate(currentYear);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast('Annus prior', 'Previous year');
  }

  function nextYearFn() {
    currentYear++;
    currentDate = new Date(currentYear, currentMonth, 1);
    easterDate = getEasterDate(currentYear);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast('Annus sequens', 'Next year');
  }

  function goToToday() {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();
    easterDate = getEasterDate(currentYear);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast('Hodie', 'Today');
  }

  function updateSettings() {
    if (detailLevel) settings.detailLevel = detailLevel.value;
    if (languagePreference) settings.language = languagePreference.value;
    if (showHolyDays) settings.showHolyDays = showHolyDays.checked;
    if (showRankIcons) settings.showRankIcons = showRankIcons.checked;
    if (showVigils) settings.showVigils = showVigils.checked;
    if (showOctaves) settings.showOctaves = showOctaves.checked;
    if (showFast) settings.showFast = showFast.checked;
    if (compactMode) settings.compactMode = compactMode.checked;
    
    updateCompactModes();
    updateLanguageBodyClass();
    updateLanguageSeparators();
    
    renderCalendar();
    if (selectedDate) updateInfoPanel(selectedDate);
    updateHeader();
    
    saveSettings();
    showToast('Configuratio renovata', 'Settings updated');
  }

  function resetAllSettings() {
    settings = {
      detailLevel: 'standard',
      language: 'bilingual',
      showHolyDays: true,
      showRankIcons: true,
      showVigils: true,
      showOctaves: true,
      showFast: true,
      compactMode: true
    };
    
    if (detailLevel) detailLevel.value = 'standard';
    if (languagePreference) languagePreference.value = 'bilingual';
    if (showHolyDays) showHolyDays.checked = true;
    if (showRankIcons) showRankIcons.checked = true;
    if (showVigils) showVigils.checked = true;
    if (showOctaves) showOctaves.checked = true;
    if (showFast) showFast.checked = true;
    if (compactMode) compactMode.checked = true;
    
    updateSettings();
  }

  function init() {
    try {
      loadSettings();
      
      currentDate = new Date();
      currentYear = currentDate.getFullYear();
      currentMonth = currentDate.getMonth();
      easterDate = getEasterDate(currentYear);
      
      updateCompactModes();
      updateHeader();
      renderCalendar();
      selectDate(currentDate);
      
      if (settingsToggle && settingsMenu) {
        settingsToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          settingsMenu.classList.toggle('hidden');
        });
        
        document.addEventListener('click', (e) => {
          if (!settingsToggle.contains(e.target) && !settingsMenu.contains(e.target)) {
            settingsMenu.classList.add('hidden');
          }
        });
      }
      
      const settingElements = [
        { el: detailLevel, handler: updateSettings },
        { el: languagePreference, handler: updateSettings },
        { el: showHolyDays, handler: updateSettings },
        { el: showRankIcons, handler: updateSettings },
        { el: showVigils, handler: updateSettings },
        { el: showOctaves, handler: updateSettings },
        { el: showFast, handler: updateSettings },
        { el: compactMode, handler: updateSettings }
      ];
      
      settingElements.forEach(({ el, handler }) => {
        if (el) el.addEventListener('change', handler);
      });
      
      if (resetSettings) resetSettings.addEventListener('click', resetAllSettings);
      
      const navElements = [
        { el: prevYear, handler: prevYearFn },
        { el: prevMonth, handler: prevMonthFn },
        { el: nextMonth, handler: nextMonthFn },
        { el: nextYear, handler: nextYearFn },
        { el: toggleToday, handler: goToToday }
      ];
      
      navElements.forEach(({ el, handler }) => {
        if (el) el.addEventListener('click', handler);
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevMonthFn();
        else if (e.key === 'ArrowRight') nextMonthFn();
        else if (e.key === 'ArrowUp') prevYearFn();
        else if (e.key === 'ArrowDown') nextYearFn();
      });
      
      window.addEventListener('resize', () => renderCalendar());
      
      showToast('ChronoForge · Liturgia', 'ChronoForge · Liturgy');
      
    } catch (error) {
      console.error('Init error:', error);
      if (errorBoundary) {
        errorBoundary.classList.remove('hidden');
        if (errorMessageLa) errorMessageLa.textContent = 'Error';
        if (errorMessageEn) errorMessageEn.textContent = 'Error';
        if (errorRetry) {
          errorRetry.addEventListener('click', () => {
            errorBoundary.classList.add('hidden');
            init();
          });
        }
      }
    }
  }

  init();
});
