import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { FaCogs } from 'react-icons/fa';
import {
  MdMap,
  MdReceipt,
  MdHome,
  MdVideoLibrary,
  MdViewAgenda,
  MdCollectionsBookmark,
  MdInsertDriveFile
} from 'react-icons/md';
import {
  FaLock
} from 'react-icons/fa'

export default () => {
  return S.list()
    .title('Website Content and Settings')
    .items([
      S.listItem()
        .title('Home and Menu')
        .icon(MdHome)
        .child(
          S.editor()
            .title('Home and Menu')
            .id('global-main')
            .schemaType('main')
            .documentId('global-main')
        ),
      S.listItem()
        .title('Segments')
        .icon(MdViewAgenda)
        .child(
          S.list()
            .title('Segments')
            .items([
              S.listItem()
                .title('Normal segments')
                .icon(MdReceipt)
                .child(S.documentTypeList('LayoutHome').title('Segments')),
              S.listItem()
                .title('Gallery segments')
                .icon(MdReceipt)
                .child(S.documentTypeList('GalleryHome').title('Segments')),
              S.listItem()
                .title('Map segments')
                .icon(MdMap)
                .child(S.documentTypeList('LayoutMap').title('Segments'))
            ])
        ),
      S.listItem()
        .title('Pages')
        .icon(MdInsertDriveFile)
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Restricted Pages')
        .icon(FaLock)
        .child(S.documentTypeList('restrictedPage').title('Restricted Pages')),
      S.listItem()
        .title('Body content blocks')
        .icon(MdCollectionsBookmark)
        .child(
          S.list()
            .title('Body content blocks')
            .items([
              S.listItem()
                .title('Forms')
                .child(S.documentTypeList('form').title('Forms')),
              S.listItem()
                .title('Grid block')
                .child(S.documentTypeList('gridblock').title('Grid block')),
              S.listItem()
                .title('Banners and Popovers')
                .child(
                  S.documentTypeList('bannerblock')
                    .title('Banners and Popovers')
                    .defaultOrdering([{ field: 'title', direction: 'asc' }])
                )
            ])
        ),
      S.listItem()
        .title('Categories and classes')
        .icon(MdCollectionsBookmark)
        .child(
          S.list()
            .title('Categories and classes')
            .items([
              S.listItem()
                .title('Addresses')
                .child(S.documentTypeList('address').title('Addresses')),
              S.listItem()
                .title('Author')
                .child(S.documentTypeList('author').title('Author')),
              S.listItem()
                .title('Categories')
                .child(S.documentTypeList('category').title('Categories')),
              S.listItem()
                .title('Speakers')
                .child(S.documentTypeList('speaker').title('Speakers')),
              S.listItem()
                .title('Series')
                .child(
                  S.documentTypeList('series')
                    .title('Series')
                    .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
                )
            ])
        ),
      S.listItem()
        .title('Sermons')
        .icon(MdVideoLibrary)
        .child(
          S.documentTypeList('sermons')
            .title('Sermons')
            .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
        ),
      S.divider(),
      S.listItem()
        .title('Events')
        .child(
          S.documentTypeList('event')
            .title('Events')
            .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('Articles')
        .child(
          S.documentTypeList('article')
            .title('Article')
            .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('Videos')
        .child(
          S.documentTypeList('video')
            .title('Videos')
            .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
        ),
      S.divider(),
      S.listItem()
        .title('Config')
        .icon(FaCogs)
        .child(
          S.editor()
            .id('config')
            .title('Config')
            .schemaType('config')
            .documentId('global-config')
        )
    ]);
};
